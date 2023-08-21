export default defineAppConfig({
  docus: {
    title: 'UnaUI',
    description: 'An Atomic UI/UX Technology',
    image: '',
    socials: {
      twitter: 'phojiee',
      github: 'una-ui/una-ui',
    },
    github: {
      dir: 'docs/content',
      branch: 'main',
      repo: 'una-ui',
      owner: 'una-ui',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: ['/', '/docs'],
    },
    header: {
      logo: true,
      exclude: ['/', '/docs'],
    },
    footer: {
      credits: {
        icon: '',
        text: 'Released under the MIT License. ',
        href: 'https://github.com/una-ui/una-ui/blob/main/LICENSE',
      },
      textLinks: [
        {
          text: 'Copyright © 2023-present Phojie Rengel',
          href: 'https://github.com/phojie',
          target: '_blank',
          rel: 'noopener',
        },
      ],
    },

  },
})
