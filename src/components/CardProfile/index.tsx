import { domAnimation, LazyMotion, m } from "framer-motion";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import { Button } from "../Button";
import { Status } from "../Status";

interface IProfileProps {
  avatar_url: string;
  created_at: string;
  html_url: string;
  followers: number;
  following: number;
  bio: string;
  name: string;
}

export function CardProfile({
  avatar_url,
  bio,
  created_at,
  followers,
  following,
  html_url,
  name,
}: IProfileProps) {
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-gray-700 p-16 flex justify-center items-center flex-col mt-2">
        <m.div className="flex items-center gap-12 mobile:flex-col mobile:text-center">
          <Roll>
            <div className="relative">
              <Status />
              <img
                src={avatar_url}
                alt={name}
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
          </Roll>
          <Bounce>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <strong className="text-white text-lg">{name}</strong>
                <div className="my-2">
                  <p className="text-gray-200">Descrição :</p>
                  <div className="w-[300px] my-2">
                    <span className="text-gray-200">{bio}</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-200 flex items-end text-left my-2 mobile:flex-col mobile:items-center">
                <div className=" w-[100%] flex justify-between">
                  <span>seguidores: {followers}</span>
                  <span>seguindo: {following}</span>
                </div>
              </div>
            </div>
          </Bounce>
        </m.div>
        <div className="flex items-center jsutify-center ml-14 mobile:ml-0">
          <Button variant="text" text="Ir para o Github" link={html_url} />
        </div>
      </section>
    </LazyMotion>
  );
}
