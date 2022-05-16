import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { Layout } from "../../layout";
import { prismicClient } from "../../configs/prismic";
import { CardPost } from "../../components/CardPost";

interface IPrismcPosts {
  data: {
    content: [{ text: string }];
    image: {
      alt: string;
      url: string;
    };
    title: [
      {
        text: string;
      }
    ];
    deployed: boolean;
    url: {
      url: string;
    };
    tecnologies: [{ tecs: { url: string; alt: string } }];
  };
  id: string;
}

const Projects: NextPage<{ posts: IPrismcPosts[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <div className='flex justify-center mt-6 flex-col gap-5 items-center'>
          {posts.map((element) => (
            <CardPost key={element.id} {...element} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const posts = await prismicClient.getAllByType("projetos-sem-deploy");

    return {
      props: { posts },
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
