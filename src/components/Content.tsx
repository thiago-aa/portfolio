import React from 'react';

import styles from '../styles/Content.module.css'
interface ContentProps {
  page: JSX.Element;
}
export default function Content(props: ContentProps) {
  const {page} = props

  return (
    <div className={styles.container}>
      {page}
    </div>
  )
}