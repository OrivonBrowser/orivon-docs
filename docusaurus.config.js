// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orivon',
  tagline: 'A browser built for owning.',
  favicon: 'img/orivon-icon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.orivonstack.com',
  baseUrl: '/',

  organizationName: 'OrivonBrowser',
  projectName: 'orivon-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {tagName: 'link', attributes: {rel: 'preload', href: '/fonts/inter-normal-100-900.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}},
    {tagName: 'link', attributes: {rel: 'preload', href: '/fonts/geist-normal-100-900.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}},
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Addresses from the previous documentation, kept working. The browser links to the first one.
        redirects: [
          {from: '/docs/implementations/web3-score', to: '/docs/using/web3-score'},
          {from: '/docs/orivon', to: '/docs/'},
          {from: '/docs/involving', to: '/docs/project/get-involved'},
          {from: '/docs/growth-contribution', to: '/docs/project/get-involved'},
          {from: '/docs/internal-docs', to: '/docs/project/get-involved'},
          {from: '/docs/roadmap', to: '/docs/project/roadmap'},
          {from: '/docs/implementations/orivon-browser', to: '/docs/using/apps'},
          {from: '/docs/implementations/native-ddoc-specs', to: '/docs/build/publishing'},
          {from: '/docs/more/our-channels', to: '/docs/project/channels'},
          {from: '/docs/more/acknowledgements', to: '/docs/project/acknowledgements'},
          {from: '/docs/more/doc-changelog', to: '/docs/project/changelog'},
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/product/og.jpg',
      metadata: [
        {name: 'description', content: 'Documentation for Orivon, a browser built for owning: apps from a link, permissions in plain words, and names and content verified on your machine.'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        title: 'Orivon',
        logo: {
          alt: 'Orivon',
          src: 'img/orivon-icon.png',
        },
        items: [
          {type: 'doc', docId: 'intro', label: 'Docs', position: 'left'},
          {type: 'doc', docId: 'build/overview', label: 'Developers', position: 'left'},
          {type: 'doc', docId: 'project/get-involved', label: 'Community', position: 'left'},
          {href: 'https://www.orivonstack.com', label: 'Website', position: 'right'},
          {href: 'https://github.com/OrivonBrowser/orivon-mvp', label: 'GitHub', position: 'right'},
          {to: '/docs/start/download', label: 'Download', position: 'right'},
        ],
      },
      footer: {
        links: [
          {
            title: 'Orivon',
            items: [
              {label: 'Website', href: 'https://www.orivonstack.com'},
              {label: 'Download', to: '/docs/start/download'},
              {label: 'Quick start', to: '/docs/start/quick-start'},
              {label: 'Roadmap', to: '/docs/project/roadmap'},
              {label: 'Privacy', to: '/docs/using/privacy'},
            ],
          },
          {
            title: 'Developers',
            items: [
              {label: 'Building for Orivon', to: '/docs/build/overview'},
              {label: 'Source code', href: 'https://github.com/OrivonBrowser/orivon-mvp'},
              {label: 'App ports', href: 'https://github.com/OrivonBrowser/orivon-ports'},
              {label: 'Security policy', href: 'https://github.com/OrivonBrowser/orivon-mvp/blob/main/SECURITY.md'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Discord', href: 'https://discord.gg/DuRg87MvgD'},
              {label: 'X', href: 'https://x.com/OrivonBrowser'},
              {label: 'Telegram', href: 'https://t.me/OrivonBrowser'},
              {label: 'Get involved', to: '/docs/project/get-involved'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Orivon · Open source under AGPL-3.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
