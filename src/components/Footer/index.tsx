import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <footer className='flex flex-col items-center gap-2 p-4'>
      <div>
        <span className='my-1 block text-center'>Contatos :</span>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link
                href='https://www.linkedin.com/in/icarovieira/'
                rel='noreferrer'
                target='_blank'
              >
                <a>
                  <AiFillLinkedin size={25} color='#005BDD' />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/IcaroSilvaFK'
                rel='noreferrer'
                target='_blank'
              >
                <a>
                  <AiFillGithub size={25} />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href='https://www.instagram.com/invites/contact/?i=hcrdp2qaj0bi&utm_content=65bbjhn'
                target='_blank'
                rel='noreferrer'
              >
                <a>
                  <AiFillInstagram size={25} color='#DE5954' />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className='text-sm'>💻Feito por Icaro Silva ©</span>
    </footer>
  );
}
