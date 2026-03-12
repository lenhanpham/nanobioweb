/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
}

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

async function handleContact(request: Request, env: Env): Promise<Response> {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return jsonResponse({ success: false, error: 'Invalid form data.' }, 400);
  }

  const name = (data.get('name') ?? '').toString().trim();
  const email = (data.get('email') ?? '').toString().trim();
  const phone = (data.get('phone') ?? '').toString().trim();
  const message = (data.get('message') ?? '').toString().trim();

  if (!name || !email || !message) {
    return jsonResponse({ success: false, error: 'Please fill in your name, email, and message.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ success: false, error: 'Please enter a valid email address.' }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_EMAIL ?? 'info@nanobiotech.com.au';

  if (!apiKey) {
    return jsonResponse(
      {
        success: false,
        error: 'Email service is not configured. Please contact us directly at info@nanobiotech.com.au.',
      },
      500
    );
  }

  const html = [
    '<h2>New Contact Form Submission</h2>',
    `<p><strong>Name:</strong> ${esc(name)}</p>`,
    `<p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>`,
    phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : '',
    '<hr>',
    '<p><strong>Message:</strong></p>',
    `<p>${esc(message)}</p>`,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HN NanoBiotech Contact <noreply@nanobiotech.com.au>',
        to: [toEmail],
        reply_to: email,
        subject: `Contact form: ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error('Resend API error:', await res.text());
      return jsonResponse({ success: false, error: 'Failed to send your message. Please try again later.' }, 502);
    }

    return jsonResponse({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return jsonResponse({ success: false, error: 'An unexpected error occurred. Please try again.' }, 500);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
