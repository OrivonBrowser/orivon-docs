import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

// The documentation at a glance: every section and its pages, in sidebar order.
const MAP = [
  {
    title: 'Get started',
    blurb: 'What Orivon is, how to install it, and your first app.',
    to: '/docs/',
    pages: [
      ['Introduction', '/docs/'],
      ['Download and install', '/docs/start/download'],
      ['Quick start', '/docs/start/quick-start'],
    ],
  },
  {
    title: 'Using Orivon',
    blurb: 'Apps, permissions, verified names, the Web3 Score and your data.',
    to: '/docs/using/apps',
    pages: [
      ['Apps from a link', '/docs/using/apps'],
      ['Permissions', '/docs/using/permissions'],
      ['Names and content', '/docs/using/names-and-content'],
      ['Web3 Score', '/docs/using/web3-score'],
      ['Everyday browsing', '/docs/using/everyday-browsing'],
      ['Privacy and your data', '/docs/using/privacy'],
      ['Known limitations', '/docs/using/known-limitations'],
    ],
  },
  {
    title: 'Building for Orivon',
    blurb: 'A web frontend and a manifest, the capability API, and porting.',
    to: '/docs/build/overview',
    pages: [
      ['Overview', '/docs/build/overview'],
      ['The manifest', '/docs/build/manifest'],
      ['Capability API', '/docs/build/capabilities'],
      ['Node.js and Electron', '/docs/build/node-and-electron'],
      ['Publishing', '/docs/build/publishing'],
      ['How it works', '/docs/build/how-it-works'],
    ],
  },
  {
    title: 'Project',
    blurb: 'Where Orivon is going, and how to take part.',
    to: '/docs/project/roadmap',
    pages: [
      ['Roadmap', '/docs/project/roadmap'],
      ['Get involved', '/docs/project/get-involved'],
      ['Community channels', '/docs/project/channels'],
      ['Acknowledgements', '/docs/project/acknowledgements'],
      ['Docs changelog', '/docs/project/changelog'],
    ],
  },
];

const STEPS = [
  ['Open a name', 'Type a .eth name or follow a link. The app is an ordinary web page at an address.', '/docs/using/apps'],
  ['It is proven', 'A light client on your machine checks the name, and every block is hashed against its CID.', '/docs/using/names-and-content'],
  ['You decide, once', 'The app lists what it needs. You read it in plain words and choose.', '/docs/using/permissions'],
  ['It runs', 'Upstream code, in your tab, holding only what you granted. Next time, from your disk.', '/docs/build/how-it-works'],
];

const HELP = [
  ['Ask the community', 'Questions about using or building with Orivon.', 'https://discord.gg/DuRg87MvgD', 'Discord'],
  ['Report a bug', 'Something wrong in the browser or the code.', 'https://github.com/OrivonBrowser/orivon-mvp/issues', 'GitHub issues'],
  ['Read the source', 'The browser, the app ports and this documentation.', 'https://github.com/OrivonBrowser', 'GitHub'],
  ['Report a vulnerability', 'Privately, never in a public channel.', 'https://github.com/OrivonBrowser/orivon-mvp/blob/main/SECURITY.md', 'Security policy'],
];

export default function Home() {
  const consent = useBaseUrl('/img/product/consent.webp');
  return (
    <Layout
      title="Documentation"
      description="Documentation for Orivon, a browser built for owning: how to use it, how it works, and how to build apps for it.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Documentation</p>
          <h1 className={styles.title}>
            Learn Orivon, use it, <span className={styles.own}>build on it</span>.
          </h1>
          <p className={styles.lead}>
            Orivon is a browser built for owning: apps open from a link, ask for what they need in
            plain words, and run with names and content verified on your machine. These pages explain
            how it works and how to build for it.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/docs/">
              Get started →
            </Link>
            <Link className={styles.secondary} to="/docs/build/overview">
              Build an app
            </Link>
          </div>
        </header>

        <section className={styles.map} aria-label="Documentation map">
          {MAP.map((s) => (
            <div key={s.title} className={styles.mapCard}>
              <Link to={s.to} className={styles.mapTitle}>
                {s.title}
              </Link>
              <p className={styles.mapBlurb}>{s.blurb}</p>
              <ul>
                {s.pages.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.steps}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>How Orivon works</h2>
            <p>
              From a link to a running app in four steps. Each one has its own page.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <ol className={styles.stepList}>
              {STEPS.map(([t, d, to], i) => (
                <li key={t}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <div>
                    <Link to={to} className={styles.stepTitle}>
                      {t}
                    </Link>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className={styles.stepShot}>
              <img
                src={consent}
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                alt="Element asking, in plain words, for network access, the camera, the microphone and screen sharing before it runs"
              />
              <figcaption>Step 3: one question, in plain words, before an app runs.</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.help}>
          <h2 className={styles.h2}>Get help</h2>
          <div className={styles.helpGrid}>
            {HELP.map(([t, d, href, label]) => (
              <Link key={t} to={href} className={styles.helpItem}>
                <strong>{t}</strong>
                <span>{d}</span>
                <em>{label} →</em>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
