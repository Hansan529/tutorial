'use client';

type Page = {
  params: { id: string };
};

export default function Page({ params }: Page) {
  return (
    <>
      <p>params: {params.id}</p>
    </>
  );
}
