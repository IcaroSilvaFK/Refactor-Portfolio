import Link from "next/link";
import { MenuMobile } from "../mobile/Menu";

export function Header() {
  return (
    <header className='flex justify-around items-center py-8 border-b gap-16 mobile:p-2 mobile:justify-between'>
      <div className='flex flex-col'>
        <strong className='font-square text-4xl text-purple-800'>
          Icaro Vieira
        </strong>
        <span className='text-xs mt-[-10px]'>Desenvolvedor Front-End</span>
      </div>
      <nav className='mobile:hidden'>
        <ul className='flex gap-8 text-lg'>
          <li>
            <Link href='/'>
              <a className='hover:text-purple-800 hover:underline  transition'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className='hover:text-purple-800 hover:underline transition'>
                Projetos
              </a>
            </Link>
          </li>
          <li>
            <Link href='/Contacts'>
              <a className='hover:text-purple-800 hover:underline  transition'>
                Contato
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <MenuMobile />
    </header>
  );
}
