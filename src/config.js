module.exports = {
  siteTitle: 'Nikitta K S',
  siteDescription:
    'Nikitta K S is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Nikitta K S, Nikitta, AI Engineer, software engineer, web developer, javascript, python, java',
  siteUrl: 'https://github.com/nikittank',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: "Nikitta K S",
  location: 'Tamil Nadu, India',
  email: 'nikittaks2003@gmail.com',
  github: 'https://github.com/nikittank',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nikittank',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nikitta-ks/',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/nikittaks/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_nikittx_nk_/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#000000',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
