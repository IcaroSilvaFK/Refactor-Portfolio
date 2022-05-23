import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function HeaderFixed() {
  const [scroll, setScroll] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    if (scroll >= 140) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  console.log(scroll);

  return (
    <>
      {visible && (
        <div className="fixed top-0 flex items-center justify-between w-[80%] z-10 bg-[rgba(255,255,255)] left-[50%] translate-x-[-50%] rounded-b py-2 px-12 shadow-lg mobile:hidden">
          <div className="flex flex-col">
            <strong
              className="font-square text-4xl text-purple-800 cursor-pointer"
              onClick={() => router.push("/")}
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
                  <a className="hover:text-purple-800 hover:underline  transition">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-purple-800 hover:underline transition">
                    Projetos
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
