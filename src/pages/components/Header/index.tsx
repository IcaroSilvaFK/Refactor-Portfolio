import Link from "next/link";

export function Header() {
  return (
    <header className='flex justify-between items-center py-8 px-16 border-b'>
      <div className='flex flex-col'>
        <strong className='font-square text-4xl text-purple-800'>
          Icaro Vieira
        </strong>
        <span className='text-xs mt-[-10px]'>Desenvolvedor Front-End</span>
      </div>
      <nav>
        <ul className='flex gap-8 text-lg'>
          <li>
            <Link href='/'>
              <a className='hover:text-purple-800 transition'>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='hover:text-purple-800 transition'>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='hover:text-purple-800 transition'>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
