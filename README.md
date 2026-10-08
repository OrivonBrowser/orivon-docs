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
