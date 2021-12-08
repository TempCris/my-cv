// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Containers
import MainCV from 'Cont/MainCV';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>CV | Main</title>
      </Head>
      <MainCV />
    </>
  );
}
