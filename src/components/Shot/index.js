import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// A real screenshot in a quiet frame. `card` is for transparent popover crops.
export default function Shot({src, alt, caption, width, height, card = false, eager = false}) {
  const url = useBaseUrl(src);
  return (
    <figure className={`${styles.figure} ${card ? styles.card : ''}`}>
      <img
        src={url}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
