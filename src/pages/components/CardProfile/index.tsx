import { dateFormatter } from "../../../utils/DateTimeFormatter";

interface IProfileProps {
  avatar_url: string;
  created_at: string;
  url: string;
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
  url,
  name,
}: IProfileProps) {
  return (
    <section className='bg-gray-700 p-16 flex justify-center items-center flex-col'>
      <div className='flex items-center gap-4'>
        <div>
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

          <div className='text-gray-200 flex items-end text-left my-2'>
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
      <a
        href={url}
        rel='noreferrer'
        target='_blank'
        className='text-white my-4 hover:text-gray-400 transition'
      >
        Ir para perfil
      </a>
    </section>
  );
}
