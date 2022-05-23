import { motion } from "framer-motion";
import Link from "next/link";
import { VscClose } from "react-icons/vsc";

import { useModalMobile } from "../../../store/store";

export function Navigation() {
  const { isOpen, toggleModal } = useModalMobile((state) => state);

  return (
    <>
      {isOpen && (
        <nav
          className="fixed bottom-0 top-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] flex justify-end"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal();
          }}
        >
          <motion.ul
            className="flex flex-col items-center gap-4 bg-white shadow-lg w-[50%] h-[100vh] text-xl py-8 relative"
            animate={{ x: [200, 0] }}
            transition={{ duration: 1 }}
          >
            <button
              className="absolute top-2 right-2 bg-purple-800 p-1 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                toggleModal();
              }}
            >
              <VscClose size={25} color="#fff" />
            </button>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projetos</a>
              </Link>
            </li>
          </motion.ul>
        </nav>
      )}
    </>
  );
}
