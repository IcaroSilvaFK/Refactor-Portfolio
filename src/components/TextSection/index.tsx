import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";

import { Button } from "../Button";

export function TextSection() {
  return (
    <section className='flex items-center justify-center w-[100%] mobile:flex-col mobile:items-center'>
      <div className='flex flex-col mobile:items-center mobile:mt-5'>
        <div>
          <ReactTypingEffect
            text={"Olá me Chamo Icaro :)"}
            typingDelay={500}
            className='text-4xl'
          />
        </div>
        <div className='py-6 w-[450px] mobile:w-auto mobile:p-3'>
          <p className='text-lg text-gray-500'>
            Desenvolvedor web, Front-End apaixonado por tecnologia.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-8 ml-4'>
            <Button
              variant='outline'
              icon={<AiFillLinkedin size={25} />}
              link='https://www.linkedin.com/in/icarovieira/'
            />
            <Button
              variant='outline'
              icon={<AiFillGithub size={25} />}
              link='https://github.com/IcaroSilvaFK'
            />
          </div>
          <div className='flex px-14'>
            <Button
              variant='full'
              icon={<HiOutlineDownload size={25} />}
              link='/assets/icaroCurriculum.pdf'
              text='Currículo'
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src='/assets/icon.png'
          width={560}
          height={560}
          alt='Programing Focusing'
        />
      </div>
    </section>
  );
}
