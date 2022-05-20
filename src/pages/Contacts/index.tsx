import type { NextPage } from "next";
import Head from "next/head";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiTwitter, SiWhatsapp } from "react-icons/si";

import { HorizontalCard } from "../../components/CardContact/Horizontal";
import { SimpleCardContact } from "../../components/CardContact/SimpleCard";
import { Layout } from "../../layout";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Icaro Vieira DEV</title>
      </Head>
      <Layout>
        <div className=" mt-6 w-[100%]">
          <h1 className="text-center text-xl">Contatos :</h1>
        </div>
        <section className="flex justify-center items-center flex-col mt-8">
          <SimpleCardContact
            icon={<MdOutlineAlternateEmail size={20} color="#F56565" />}
            text="Email :"
            contact="icarovsilva1@gmail.com"
          />
          <SimpleCardContact
            icon={<SiTwitter size={20} color="#25AAE1" />}
            text="Twitter :"
            contact="@IcaroVieiraFK"
          />
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
      </Layout>
    </>
  );
};

export default Contacts;
