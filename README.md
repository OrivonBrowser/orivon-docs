# Orivon documentation

The source of [docs.orivonstack.com](https://docs.orivonstack.com), the documentation for
[Orivon](https://github.com/OrivonBrowser/orivon-mvp), a browser built for owning.

Built with [Docusaurus](https://docusaurus.io/). Pages are in `docs/`, the sidebar in `sidebars.js`,
the theme in `src/css/custom.css`, and shared page components (download button, screenshots, cards)
in `src/components/`.

## Run it locally

```bash
npm install
npm start        # live preview at http://localhost:3000
npm run build    # static site in build/, fails on any broken link
```

## Web2 and Web3 builds

```bash
npm run build         # build/, for docs.orivonstack.com on GitHub Pages
npm run build:web3    # the same, plus build-web3/
```

`build-web3/` is the same site with every Orivon address pointing at its `.eth.limo` twin. It is
published on IPFS behind the IPNS name that `docs.orivonstack.eth` points at, and any browser reaches
it at `docs.orivonstack.eth.limo`. Orivon resolves the `.eth` name itself.

`scripts/web3-links.mjs` does the rewrite. It is the same file in every Orivon repository that
builds a static site. The source files keep Web2 addresses.
The twin keeps the Web2 address in `<link rel="canonical">` and ships no `sitemap.xml`, so search
engines index `docs.orivonstack.com` and treat `docs.orivonstack.eth.limo` as a copy. `trailingSlash: true`
in `docusaurus.config.js` matches how GitHub Pages serves the pages (every page address ends in a slash).

## Writing for these docs

- Describe what Orivon does today. A feature that is not in the browser belongs on the roadmap, in
  one line, and nowhere else.
- Say what something does, not how good it is. Short sentences, the mechanism in plain words,
  British spelling (as in the browser's README).
- Use real screenshots from the browser, and real addresses (`freetube.orivonstack.eth`) or
  `.example` names in examples.

## Contributing

Open an issue or a pull request. For larger changes, talk to us first on
[Discord](https://discord.gg/DuRg87MvgD).
