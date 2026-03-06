import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Our Science',
      links: [
        { text: 'Platform', href: getPermalink('/our-science') },
        { text: 'R&D', href: getPermalink('/research') },
      ],
    },
    {
      text: 'Solutions',
      href: getPermalink('/solutions'),
    },
    {
      text: 'About Us',
      links: [
        { text: 'Company', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
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
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getPermalink('/blog') },
        //{ text: 'News', href: getPermalink('/news') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/hnnanobiotech' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/hnnanobiotech' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/lenhanpham/nanobioweb' },
  ],
  footNote: `
    © <a class="text-blue-600 underline dark:text-muted" href="https://nanobiotech.com.au/"> HN NanoBiotech</a> · All rights reserved.
  `,
};
