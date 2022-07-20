import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gemmon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen gradient">
        <div className="w-full max-w-7xl mx-auto py-10">
          <Header />
        </div>
      </main>
    </div>
  );
};

export default Home;
