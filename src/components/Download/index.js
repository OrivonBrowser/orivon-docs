import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const REPO = 'OrivonBrowser/orivon-mvp';
export const RELEASES_URL = `https://github.com/${REPO}/releases`;
const API = `https://api.github.com/repos/${REPO}/releases?per_page=10`;
const CACHE_KEY = 'orivon-docs-release-v1';
const CACHE_MS = 15 * 60 * 1000;

export const PACKAGES = [
  {key: 'linux-deb', os: 'linux', label: 'Linux', kind: '.deb', detail: 'Debian and Ubuntu. Can be set as the default browser.', pattern: /^orivon_.+_amd64\.deb$/},
  {key: 'linux-appimage', os: 'linux', label: 'Linux', kind: 'AppImage', detail: 'Any distribution, x64. May need libfuse2.', pattern: /^Orivon-.+-x86_64\.AppImage$/},
  {key: 'win-x64', os: 'win', label: 'Windows', kind: 'Installer (.exe)', detail: 'Windows 10 or newer, x64. Per user, no administrator needed.', pattern: /^Orivon-Setup-.+-x64\.exe$/},
  {key: 'mac-arm64', os: 'mac', label: 'macOS', kind: '.dmg, Apple silicon', detail: 'macOS 13 or newer.', pattern: /^Orivon-.+-arm64\.dmg$/},
  {key: 'mac-x64', os: 'mac', label: 'macOS', kind: '.dmg, Intel', detail: 'macOS 13 or newer.', pattern: /^Orivon-.+-x64\.dmg$/},
];

const FIRST_RUN = {
  win: 'The installer is not signed with a bought certificate yet: choose More info, then Run anyway.',
  mac: 'On first open, choose Open Anyway in System Settings > Privacy & Security.',
};

function detectOs() {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile';
  if (/Windows/i.test(ua)) return 'win';
  if (/Mac OS X|Macintosh/i.test(ua)) return 'mac';
  if (/Linux|X11/i.test(ua)) return 'linux';
  return 'unknown';
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return Date.now() - v.at < CACHE_MS ? v.release : null;
  } catch {
    return null;
  }
}

function parseRelease(list) {
  const rel = (list || []).find((r) => !r.draft && r.assets && r.assets.length);
  if (!rel) return null;
  const assets = {};
  for (const p of PACKAGES) {
    const a = rel.assets.find((x) => p.pattern.test(x.name));
    if (a) assets[p.key] = {url: a.browser_download_url, size: a.size, name: a.name};
  }
  return {tag: rel.tag_name, url: rel.html_url, date: rel.published_at, assets};
}

// Latest release from GitHub; null until (or unless) it arrives. Never throws.
export function useRelease() {
  const [release, setRelease] = useState(null);
  const [os, setOs] = useState('unknown');
  useEffect(() => {
    setOs(detectOs());
    const cached = readCache();
    if (cached) {
      setRelease(cached);
      return;
    }
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    fetch(API, {signal: ctrl.signal, headers: {Accept: 'application/vnd.github+json'}})
      .then((r) => (r.ok ? r.json() : null))
      .then((list) => {
        const rel = parseRelease(list);
        if (!rel) return;
        setRelease(rel);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({at: Date.now(), release: rel}));
        } catch {}
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));
    return () => ctrl.abort();
  }, []);
  return {release, os};
}

function mb(bytes) {
  return bytes ? `${Math.round(bytes / 1e6)} MB` : '';
}

// Every package, with the visitor's own platform marked.
export function DownloadTable() {
  const {release, os} = useRelease();
  return (
    <div className={styles.table}>
      {PACKAGES.map((p) => {
        const asset = release && release.assets[p.key];
        const mine = p.os === os;
        return (
          <div key={p.key} className={`${styles.row} ${mine ? styles.mine : ''}`}>
            <div className={styles.os}>
              <strong>{p.label}</strong>
              <span>{p.kind}</span>
            </div>
            <div className={styles.rowDetail}>
              {p.detail}
              {mine && FIRST_RUN[p.os] && <em className={styles.firstRun}>{FIRST_RUN[p.os]}</em>}
            </div>
            <Link className={styles.rowLink} to={asset ? asset.url : RELEASES_URL}>
              {asset ? `Download${asset.size ? ' · ' + mb(asset.size) : ''}` : 'Releases'}
            </Link>
          </div>
        );
      })}
      <p className={styles.meta}>
        {release ? (
          <>
            Latest: <Link to={release.url}>{release.tag}</Link>
            {release.date && ` · ${new Date(release.date).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}`}
            {' · '}
          </>
        ) : null}
        <Link to={RELEASES_URL}>All releases</Link>
        {' · '}
        <Link to={`https://github.com/${REPO}`}>Source code</Link>
      </p>
    </div>
  );
}
