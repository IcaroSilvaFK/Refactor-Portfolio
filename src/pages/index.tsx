import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { TextSection } from "./components/TextSection";
import { Layout } from "./layout";
import axios from "axios";
import { CardProfile } from "./components/CardProfile";

interface IUserProps {
  avatar_url: string;
  created_at: string;
  url: string;
  followers: number;
  following: number;
  bio: string;
  name: string;
}

const Home: NextPage<{ data: IUserProps }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <Layout>
        <TextSection />
        <CardProfile {...data} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/IcaroSilvaFK"
    );

    return {
      props: { data },
      revalidate: 64 * 64 * 72,
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        destination: "/error",
        permanent: "false",
      },
    };
  }
};

export default Home;
