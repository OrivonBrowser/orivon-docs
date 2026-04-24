// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const ImplementationsDescription = 
`Implementations Category contains the specifications of how Orivon should look like both for devs and users.  
Its up to the Technical Design writers to correctly follow the Implementation, more details on the Internal Documentation.`

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'orivon',
      label: 'The Orivon Project',
    },
    {
      type: 'category',
      label: 'Orivon Foundation',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'involving',
          label: 'Get Involved',
        },
        {
          type: 'doc',
          id: 'roadmap',
          label: 'Roadmap',
        },
        {
          type: 'doc',
          id: 'dao-plan',
          label: 'DAO Structure & Plan',
        },
        {
          type: 'doc',
          id: 'economical-strategy',
          label: 'Economic strategy',
        },
        {
          type: 'doc',
          id: 'internal-docs',
          label: 'Internal Docs'
        },
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Implementations',
        description: ImplementationsDescription,
      },
      items: [
        'implementations/orivon-ecosystem',
        'implementations/orivon-browser',
        'implementations/modules-system',
        'implementations/wallet-system',
        'implementations/web3-score',
        'implementations/native-ddoc-specs'
      ],
    },
    {
      type: 'category',
      label: 'Technical design',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Technical design',
        description: 'Overview of the Technical Design',
      },
      items: [
        'technical-design/orivon-runtime',
        {
          type: 'category',
          label: 'Orivon Standards',
          link: {
            type: 'doc',
            id: 'technical-design/standards',
          },
          collapsed: true,
          items: [
            'technical-design/orivon-objects',
          ],
        },
        'technical-design/orivon-core',
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: true,
      items: [
        'more/our-channels',
        'more/mobile-note',
        'more/acknowledgements',
        'more/doc-changelog',
      ],
    },
  ]
};

export default sidebars;
