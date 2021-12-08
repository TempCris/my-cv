// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Home from 'containers/Home';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>CV | Start</title>
      </Head>
      <Home />
    </>
  );
}
