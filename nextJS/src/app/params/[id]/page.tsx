'use client';

import styles from './params.module.scss';

type Page = {
  params: { id: string };
};

export default function Page({ params }: Page) {
  return (
    <>
      <p style={{ color: styles.testColor }} className={styles.test}>
        params: {params.id}
      </p>
      <img src="/next.svg" alt="" />
    </>
  );
}
