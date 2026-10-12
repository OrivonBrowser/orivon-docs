import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function Cards({children, columns = 2}) {
  return <div className={`${styles.grid} ${styles['cols' + columns]}`}>{children}</div>;
}

// A benefit title over one or two lines that name the mechanism; links when `to` is set.
export function Card({title, to, children}) {
  const body = (
    <>
      <h3 className={styles.title}>
        {title}
        {to && <span aria-hidden="true" className={styles.arrow}>→</span>}
      </h3>
      <div className={styles.body}>{children}</div>
    </>
  );
  return to ? (
    <Link className={`${styles.card} ${styles.link}`} to={to}>
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}
