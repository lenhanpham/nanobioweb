import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about-us'),
      links: [
        { text: 'Our Goals', href: getPermalink('/our-goals') },
        { text: 'Our Science', href: getPermalink('/our-science') },
        { text: 'Leadership', href: getPermalink('/leadership') },
      ],
    },
    {
      text: 'Products',
      href: getPermalink('/products'),
      links: [
        { text: 'Nano NPK', href: getPermalink('/products/nano-npk') },
        { text: 'Nano Silica', href: getPermalink('/products/nano-silica') },
        { text: 'Nano Copper', href: getPermalink('/products/nano-copper') },
        { text: 'Nano Chitosan', href: getPermalink('/products/nano-chitosan') },
        { text: 'Passion Fruit Nano BioFertiliser', href: getPermalink('/products/nano-minerals') },
      ],
    },
    {
      text: 'Research',
      href: getPermalink('/research'),
    },
  ],
  actions: [{ text: 'Partner with us', href: 'https://nanobiotech.com.au/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About Us',
      links: [
        { text: 'Our Goals', href: getPermalink('/our-goals') },
        { text: 'Our Science', href: getPermalink('/our-science') },
        { text: 'Leadership', href: getPermalink('/leadership') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Nano NPK', href: getPermalink('/products/nano-npk') },
        { text: 'Nano Silica', href: getPermalink('/products/nano-silica') },
        { text: 'Nano Copper', href: getPermalink('/products/nano-copper') },
        { text: 'Nano Chitosan', href: getPermalink('/products/nano-chitosan') },
        { text: 'Passion Fruit Nano BioFertiliser', href: getPermalink('/products/nano-minerals') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Research', href: getPermalink('/research') },
        { text: 'Blog', href: getPermalink('/blog') },
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
