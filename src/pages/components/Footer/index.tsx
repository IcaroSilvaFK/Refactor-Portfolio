import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <footer className='flex flex-col'>
      <span>Contatos :</span>
      <div>
        <nav>
          <ul>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <AiFillGithub />
            </li>
            <li>
              <AiFillInstagram />
            </li>
          </ul>
        </nav>
      </div>
      <span>💻Feito por Icaro Silva ©</span>
    </footer>
  );
}
