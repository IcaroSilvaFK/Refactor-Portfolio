import { dateFormatter } from "../../utils/DateTimeFormatter";
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
    <section className='bg-gray-700 p-16 flex justify-center items-center flex-col'>
      <div className='flex items-center gap-4 mobile:flex-col mobile:text-center'>
        <div className='relative'>
          <Status />
          <img
            src={avatar_url}
            alt=''
            className='rounded-full'
            width={150}
            height={150}
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <strong className='text-white text-lg'>{name}</strong>
            <div className='my-2'>
              <p className='text-gray-200'>Bio :</p>
              <span className='text-gray-200 px-2'>{bio}</span>
            </div>
          </div>

          <div className='text-gray-200 flex items-end text-left my-2 mobile:flex-col mobile:items-center'>
            <div className=' flex flex-col'>
              <span>seguidores: {followers}</span>
              <span>seguindo: {following}</span>
            </div>
            <div>
              criado: <em>{dateFormatter(created_at)}</em>
            </div>
          </div>
        </div>
      </div>

      <Button variant='text' text='Ir para perfil' link={html_url} />
    </section>
  );
}
