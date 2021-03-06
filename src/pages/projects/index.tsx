import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import { CardPost } from "../../components/CardPost";
import { HeaderFixed } from "../../components/HeaderFixed";
import { prismicClient } from "../../configs/prismic";
import { IPrismcPosts } from "../../interface/Prismic.interface";
import { Layout } from "../../layout";

const Projects: NextPage<{ posts: IPrismcPosts[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <HeaderFixed />
        <div className="flex justify-center mt-6 flex-col gap-5 items-center mobile:p-2">
          {posts.map((element) => (
            <CardPost key={element.id} {...element} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const posts = await prismicClient.getAllByType("projetos-sem-deploy");

    return {
      props: { posts },
      revalidate: 60 * 60 * 24,
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Projects;
