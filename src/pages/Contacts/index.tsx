import type { NextPage } from "next";
import Head from "next/head";

import { SiWhatsapp, SiTwitter } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { Layout } from "../../layout";
import { SimpleCardContact } from "../../components/CardContact/SimpleCard";
import { HorizontalCard } from "../../components/CardContact/Horizontal";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <Layout>
        <section className='flex justify-center items-center flex-col mt-12'>
          <SimpleCardContact
            icon={<SiWhatsapp size={20} color='#48BB78' />}
            text='Whatsapp :'
            contact='(62) 99835-8542'
          />
          <SimpleCardContact
            icon={<MdOutlineAlternateEmail size={20} color='#F56565' />}
            text='Email :'
            contact='icarovsilva1@gmail.com'
          />
          <SimpleCardContact
            icon={<SiTwitter size={20} color='#25AAE1' />}
            text='Twitter :'
            contact='@IcaroVieiraFK'
          />
        </section>
        <section>
          <HorizontalCard
            alt='Instagram'
            image='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'
            link='https://www.instagram.com/icaro.vieira0/'
          />
          <HorizontalCard
            alt='Github'
            image='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
            link='https://github.com/IcaroSilvaFK'
          />
          <HorizontalCard
            alt='Instagram'
            image='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'
            link='Instagram'
          />
        </section>
      </Layout>
    </>
  );
};

export default Contacts;
