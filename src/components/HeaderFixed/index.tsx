import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function HeaderFixed() {
  const [scroll, setScroll] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', setSCrollLocationInState);
    if (scroll >= 140) {
      setVisible(true);
      return;
    }
    setVisible(false);

    return () => {
      window.removeEventListener('scroll', setSCrollLocationInState);
    };
  }, [scroll]);

  function setSCrollLocationInState() {
    setScroll(window.scrollY);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed top-0 flex items-center justify-between  max-w-[1200px] w-[100%]  z-10 bg-[rgba(255,255,255)] left-[50%] translate-x-[-50%] rounded-b py-2 px-12 shadow-lg mobile:hidden overflow-hidden desktop:max-w-[80%]">
      <div className="flex flex-col">
        <strong
          className="font-square text-4xl text-purple-800 cursor-pointer"
          onClick={() => router.push('/')}
        >
          Icaro Vieira
        </strong>
        <span className="text-xs mt-[-10px]">Desenvolvedor Front-End</span>
      </div>
      <nav>
        <ul
          className="flex gap-10
            "
        >
          <li>
            <Link href="/">
              <a
                className="hover:text-purple-800 hover:underline  transition"
                title="Home"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className="hover:text-purple-800 hover:underline transition"
                title="Projetos"
              >
                Projetos
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://blog-gamma-orcin.vercel.app/"
              className="hover:text-purple-800 hover:underline  transition"
              target="_blank"
              rel="norrefer noreferrer"
              title="Fique por dentro das principais notícias do mundo da tecnologia"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="absolute right-4 w-1 -bottom-3 h-[60px] rotate-45 bg-purple-800"></div>
      <div className="absolute right-1 w-1 -bottom-3 h-[60px] rotate-45 bg-purple-800"></div>
      <div className="absolute -right-2 w-1 -bottom-3 h-[60px] rotate-45 bg-purple-800"></div>
    </div>
  );
}
