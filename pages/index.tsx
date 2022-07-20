import type { NextPage } from "next";
import Head from "next/head";

import Container from "../components/Container";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gemmon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen gradient">
        <Container>
          <Header />
        </Container>
      </main>
    </div>
  );
};

export default Home;
