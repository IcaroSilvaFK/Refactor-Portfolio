import type { NextPage } from "next";
import Head from "next/head";
import { TextSection } from "./components/TextSection";
import { Layout } from "./layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <Layout>
        <TextSection />
      </Layout>
    </>
  );
};

export default Home;
