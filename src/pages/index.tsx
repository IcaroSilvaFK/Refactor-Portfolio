import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { TextSection } from "../components/TextSection";
import { Layout } from "../layout";
import { CardProfile } from "../components/CardProfile";
import { MoreInfo } from "../components/MoreInfo";
import { userGithub } from "../configs/axiosGitihub";

interface IUserProps {
  avatar_url: string;
  created_at: string;
  html_url: string;
  followers: number;
  following: number;
  bio: string;
  name: string;
}

const Home: NextPage<{ data: IUserProps }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <TextSection />
        <CardProfile {...data} />
        <MoreInfo image={data.avatar_url} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await userGithub("IcaroSilvaFK");

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
