import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';

import { IImagesProps } from '../../DTOs/ImageResponse';
import { prismaClient } from '../../configs/prisma';
import { CarouselTecs } from '../../components/Coursel';

interface IFormProps {
  url: string;
  alt: string;
}

export default function Images({ images }: { images: IImagesProps[] }) {
  const { register, handleSubmit, reset } = useForm<IFormProps>();
  const navigate = useRouter();

  const onSubmit: SubmitHandler<IFormProps> = async ({ alt, url }) => {
    try {
      await axios.post('/api/images', {
        alt,
        url,
      });
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Images Carrousel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="overflow-hidden">
        <button
          onClick={() => navigate.push('/')}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-400 mt-8 ml-8 rounded-lg text-white shadow-md"
        >
          <IoMdArrowRoundBack size={25} />
          Voltar
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center
          gap-3"
        >
          <input
            type="text"
            {...register('url')}
            className="w-[350px] rounded-md"
            placeholder="Digite a url aqui"
          />
          <input
            type="text"
            {...register('alt')}
            className="w-[350px] rounded-md"
            placeholder="Digite o texto alternativo aqui"
          />
          <button
            className="
          px-4 py-2 mt-4 bg-cyan-400 rounded-md text-white shadow-lg hover:bg-blue-600 transition-all"
          >
            Adicionar
          </button>
        </form>

        <CarouselTecs data={images} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const bandages = await prismaClient.images.findMany();

    return {
      props: {
        images: bandages,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
