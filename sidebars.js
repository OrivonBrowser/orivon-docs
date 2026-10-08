// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Start',
      collapsible: false,
      items: ['intro', 'start/download', 'start/quick-start'],
    },
    {
      type: 'category',
      label: 'Using Orivon',
      collapsible: false,
      items: [
        'using/apps',
        'using/permissions',
        'using/names-and-content',
        'using/web3-score',
        'using/everyday-browsing',
        'using/privacy',
        'using/known-limitations',
      ],
    },
    {
      type: 'category',
      label: 'Building for Orivon',
      collapsible: false,
      items: [
        'build/overview',
        'build/manifest',
        'build/capabilities',
        'build/node-and-electron',
        'build/publishing',
        'build/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      collapsible: false,
      items: [
        'project/roadmap',
        'project/get-involved',
        'project/channels',
        'project/acknowledgements',
        'project/changelog',
      ],
    },
  ],
};

export default sidebars;
