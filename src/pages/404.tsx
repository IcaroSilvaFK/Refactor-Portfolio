import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Layout } from "../layout";

const Error: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/404.svg"
            width={430}
            height={430}
            alt="Erro 404"
            className="animate-levite rounded-full"
          />
        </div>
        <button
          className="mx-auto flex items-center gap-1 rounded shadow-xl p-2 bg-purple-800 text-white hover:brightness-75"
          onClick={() => router.push("/")}
        >
          <AiOutlineArrowLeft size={20} />
          voltar
        </button>
        <div className="mb-14 mobile:mb-16"></div>
      </Layout>
    </>
  );
};

export default Error;
