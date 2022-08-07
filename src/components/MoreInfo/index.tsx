import Roll from 'react-reveal/Roll';

export function MoreInfo({ image }: { image: string }) {
  return (
    <Roll left cascade>
      <section className="flex justify-evenly items-center my-10 w-[700px] mx-auto mobile:flex-col mobile:gap-4 mobile:w-auto">
        <div className="w-72">
          <h3 className="text-xl font-bold mb-2 mobile:text-center">Sobre :</h3>
          <div>
            <p className="text-gray-700 text-base mobile:text-center">
              Sou um estudante de Engenharia de Software na UNOPAR, e
              tecnologias de desenvolvimento Front-End.
            </p>
            <p className="font-bold mt-2 mobile:text-center">Ferramentas :</p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                alt="SASS"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="JAVASCRIPT"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="REACT"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                alt="REDUX"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                alt="NEXTJS"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TYPESCRIPT"
                className="hover:scale-105 transition"
              />
              <img
                src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
                alt="styled-components"
                className="hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="Icaro Vieira"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>
    </Roll>
  );
}
