import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { MenuMobile } from '../mobile/Menu';

export const Header = memo(() => {
  const router = useRouter();

  return (
    <header className="border-b  mobile:p-2">
      <div className="m-auto flex justify-between max-w-[1000px] items-center py-8  mobile:justify-between">
        <div className="flex flex-col">
          <strong
            className="font-square text-4xl text-purple-800 cursor-pointer"
            onClick={() => router.push('/')}
          >
            Icaro Vieira
          </strong>
          <span className="text-xs mt-[-10px]">Desenvolvedor Front-End</span>
        </div>
        <nav className="mobile:hidden">
          <ul className="flex gap-8 text-lg">
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
                title="Link para o blog"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <MenuMobile />
      </div>
    </header>
  );
});

Header.displayName = 'Header';
