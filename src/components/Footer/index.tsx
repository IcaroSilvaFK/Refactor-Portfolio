import { useEffect, useState } from "react";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
import { BsYoutube } from "react-icons/bs";
/**
 * 
 * @returns 
 *  ? "flex flex-col items-center gap-2 p-4  w-[100%]"
    : "flex flex-col items-center gap-2 p-4  w-[100%]  absolute bottom-0"
 * 
 */

export function Footer() {
  const pathname = useRouter();
  const route = pathname.pathname;
  const [names, setNames] = useState<string>("");

  useEffect(() => {
    setNames(
      route === "/" || route === "/projects"
        ? "flex flex-col items-center gap-2 p-4  w-[100%]"
        : "flex flex-col items-center gap-2 p-4  w-[100%]  absolute bottom-0"
    );
  }, []);

  return (
    <footer className={names}>
      <div>
        <span className="my-1 block text-center">Contatos :</span>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/icarovieira/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin size={25} color="#005BDD" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IcaroSilvaFK"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invites/contact/?i=hcrdp2qaj0bi&utm_content=65bbjhn"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={25} color="#DE5954" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCWI5AEpCVB8YZ9LNp1jcN7A"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube color="#E71316" size={25} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <span className="text-sm">💻Feito por Icaro Silva ©</span>
    </footer>
  );
}
