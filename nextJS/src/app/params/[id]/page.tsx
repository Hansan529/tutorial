import styles from './params.module.scss';

type Page = {
  params: { id: string };
};

export default async function Page({ params }: Page) {
  const alpha: Response = await fetch('http://localhost:3000/api/');
  const { data } = await alpha.json();
  return (
    <>
      <p className={styles.test}>params: {params.id}</p>
      {data.map((val) => val.email)}
    </>
  );
}
