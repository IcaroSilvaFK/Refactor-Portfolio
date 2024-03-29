import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineDownload } from 'react-icons/hi';
import ReactTypingEffect from 'react-typing-effect';

import { Button } from '../Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function TextSection() {
  return (
    <motion.div
      className="flex items-center justify-between w-[100%] max-w-[1200px] m-auto mobile:flex-col mobile:items-center desktop:max-w-[80%]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex flex-col mobile:items-center mobile:mt-5"
        variants={item}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="w-[100%] flex mobile:justify-center">
          <ReactTypingEffect
            text={'Olá, me chamo Icaro :)'}
            typingDelay={3000}
            eraseDelay={5000}
            className="text-4xl mobile:text-2xl"
          />
        </div>
        <motion.div
          className="py-6 w-[450px] mobile:w-auto mobile:p-3 mobile:text-center"
          animate={{ x: [100, 0] }}
          transition={{ ease: 'easeOut', duration: 2.5 }}
        >
          <h1 className="text-lg text-gray-700">
            Desenvolvedor web, apaixonado por tecnologias.
          </h1>
        </motion.div>
        <div className="flex flex-col">
          <motion.div
            className="flex gap-8 ml-4"
            animate={{ opacity: [0, 1] }}
            transition={{ ease: 'linear', duration: 1 }}
          >
            <Button
              variant="outline"
              icon={<AiFillLinkedin size={25} />}
              link="https://www.linkedin.com/in/icarovieira/"
            />
            <Button
              variant="outline"
              icon={<AiFillGithub size={25} />}
              link="https://github.com/IcaroSilvaFK"
            />
          </motion.div>
          <motion.div
            className="flex px-14"
            animate={{ opacity: [0, 1] }}
            transition={{ ease: 'linear', duration: 1 }}
          >
            <Button
              variant="full"
              icon={<HiOutlineDownload size={25} />}
              link="/assets/icaro_curriculum.pdf"
              text="Currículo"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <Image
          src="/assets/icon.png"
          width={560}
          height={560}
          alt="Programing Focusing"
        />
      </motion.div>
    </motion.div>
  );
}
