import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Our Science',
      href: getPermalink('/our-science'),
    },
    {
      text: 'Solutions',
      href: getPermalink('/solutions'),
    },
    {
      text: 'Sustainability',
      href: getPermalink('/sustainability'),
    },
    {
      text: 'R&D',
      href: getPermalink('/research'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    }
  ],
  actions: [{ text: 'Partner with us', href: 'https://nanobiotech.com.au/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Green solution', href: getPermalink('/services') },
        { text: 'Crop protection', href: getPermalink('/services') },
      ]
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
  ],
  footNote: `
    © <a class="text-blue-600 underline dark:text-muted" href="https://nanobiotech.com.au/"> Hoang Nhan Nano Biotech</a> · All rights reserved.
  `,
};
