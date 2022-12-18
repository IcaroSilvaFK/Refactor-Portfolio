import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import Tilt from 'react-vanilla-tilt';
import { toast } from 'react-toastify';

import {
  HorizontalCard,
  SimpleCardContact,
  CardProfile,
  CarouselTecs,
  HeaderFixed,
  TextSection,
} from '../components';
import { userGithub } from '../configs/axiosGitihub';
import { Layout } from '../layout';

import { prismaClient } from '../configs/prisma';
import { IImagesProps } from '../DTOs/ImageResponse';
import { IUserProps } from '../DTOs/UserGithubResponse';

const Home: NextPage<{ data: IUserProps; images: IImagesProps[] }> = ({
  data,
  images,
}) => {
  const handleOpenNewTab = () => {
    window.open(
      'https://www.youtube.com/channel/UCWI5AEpCVB8YZ9LNp1jcN7A/videos',
    );
  };

  useEffect(() => {
    toast('Olá Seja Bem-vindo. 🚀', {
      position: 'top-center',
      draggable: true,
      pauseOnHover: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <HeaderFixed />
        <section className="h-[88vh] w-[100%]">
          <TextSection />
        </section>
        <CardProfile {...data} />
        <div className="w-[100%] overflow-hidden">
          <CarouselTecs data={images} />
        </div>
        <div className="my-8" />
        <div className=" mt-6 w-[100%]">
          <h1 className="text-center text-xl">Contatos :</h1>
        </div>
        <section className="flex justify-center items-center flex-col mt-12">
          <Tilt style={{ maxWidth: 'content', background: 'transparent' }}>
            <SimpleCardContact
              icon={<MdOutlineAlternateEmail size={20} color="#F56565" />}
              text="Email :"
              contact="icarovsilva1@gmail.com"
            />
          </Tilt>
          <div className="mt-2" />
          <Tilt style={{ maxWidth: 'content', background: 'transparent' }}>
            <SimpleCardContact
              icon={<SiTwitter size={20} color="#25AAE1" />}
              text="Twitter :"
              contact="@IcaroVieiraFK"
            />
          </Tilt>
        </section>
        <section className="flex gap-3 mt-10 justify-center mobile:p-2">
          <HorizontalCard
            alt="Instagram"
            image="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            link="https://www.instagram.com/icaro.vieira0/"
          />
          <HorizontalCard
            alt="Github"
            image="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            link="https://github.com/IcaroSilvaFK"
          />
          <HorizontalCard
            alt="LinkeIn"
            image="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            link="https://www.linkedin.com/in/icarovieira"
          />
        </section>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handleOpenNewTab}
            className="p-4 rounded shadow-2xl flex items-center gap-4 animate-bounce-slow"
            aria-label="button"
          >
            ir para canal do Youtube
            <BsYoutube color="#E71316" size={25} />
          </button>
        </div>
        <div className="my-8" />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await userGithub.get('IcaroSilvaFK');
    const allBandages = await prismaClient.images.findMany();

    return {
      props: { data, images: allBandages },
      revalidate: 64 * 64,
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
};

export default Home;
