import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export function CarouselTecs() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-[100%] flex justify-center gap-4 relative p-8 bg-gray-700">
      <motion.img
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS3"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
        alt="SASS"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
        alt="JAVASCRIPT"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
        alt="REACT"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
        alt="REDUX"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
        alt="NEXTJS"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
        alt="TYPESCRIPT"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
        alt="styled-components"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"
        alt="styled-components"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=whit"
        alt="styled-components"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      <motion.img
        src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="styled-components"
        animate={{ x: [-width, width + 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
    </div>
  );
}

// className="hover:scale-105 transition  absolute right-0 grayscale animate-carousel"
