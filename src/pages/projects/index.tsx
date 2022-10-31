import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { CardPost, HeaderFixed } from '../../components';
import { IPrismcPosts } from '../../DTOs/PrismicResponse';
import { prismicClient } from '../../configs/prismic';
import { Layout } from '../../layout';

const Projects: NextPage<{ posts: IPrismcPosts[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <HeaderFixed />
        <section
          className="max-w-[1100px] m-auto 
        flex justify-center items-center mt-6 flex-col gap-5 mobile:p-2"
        >
          {posts.map((post) => (
            <CardPost {...post} key={post.id} />
          ))}
        </section>
        <div className="mt-7" />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await prismicClient.getAllByType('projetos-sem-deploy');
    console.log(posts);
    return {
      props: { posts },
      revalidate: 60 * 60 * 24,
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default Projects;
