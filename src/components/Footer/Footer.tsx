import { memo } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-4  w-[100%]">
      <div>
        <span className="my-1 block text-center">Contatos :</span>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/icarovieira/"
                rel="noreferrer"
                target="_blank"
                title="Link para o Linkedin"
              >
                <AiFillLinkedin size={25} color="#005BDD" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IcaroSilvaFK"
                rel="noreferrer"
                target="_blank"
                title="Link para o Github"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invites/contact/?i=hcrdp2qaj0bi&utm_content=65bbjhn"
                target="_blank"
                rel="noreferrer"
                title="Link para o Instagram"
              >
                <AiFillInstagram size={25} color="#DE5954" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCWI5AEpCVB8YZ9LNp1jcN7A"
                target="_blank"
                rel="noreferrer"
                title="Link para o Youtube"
              >
                <BsYoutube color="#E71316" size={25} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <span className="text-sm">💻Feito com 💗 por Icaro ©</span>
    </footer>
  );
}

export default memo(Footer);
