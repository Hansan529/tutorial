import styles from './params.module.scss';
import Create from '../../create/page';

type Page = {
  params: { id: string };
};

export default async function Page({ params }: Page) {
  const alpha: Response = await fetch('http://localhost:3000/api/', {
    cache: 'no-store',
  });
  const { data } = await alpha.json();
  return (
    <>
      <p className={styles.test}>params: {params.id}</p>
      <Create props={data} />
      {data.map((val) => val.email)}
    </>
  );
}
