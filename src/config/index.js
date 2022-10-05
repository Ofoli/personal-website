module.exports = {
  siteTitle: 'Samson Kwaku Nkrumah | Full Stack Software Engineer',
  siteDescription:
    'Samson Kwaku Nkrumah is a smart computer engineer, building things to make the world a better place',
  siteKeywords:
    'Samson Kwaku Nkrumah, Samson, Kwaku, Nkrumah, Boanerges, software engineer, backend, back-end engineer, web developer, python, nodejs, docker, microservices, ghana, React, express,',
  siteUrl: 'https://boanerge.me',
  siteLanguage: 'en_US',
  siteImage: 'https://boanerges.me/og.png',

  // googleVerification: 'dUgjmQBI7tQOciwUQ16Q31rC6bPvMShtEKYuckNowQ',

  name: 'Samson Kwaku Nkrumah',
  location: 'Accra, Ghana',
  email: 'samsonnkrumah253@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/Boanerges1996/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/samson-kwaku-n-a47187104/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/boanerges1996',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/opodame/',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/samson_nkrumah',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Work',
      url: '#jobs',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@opodame',
  googleAnalyticsID: 'UA-127661885-1',

  headerHeight: 100,

  // greenColor: '#64ffda',
  // navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
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
    };
  },
};
