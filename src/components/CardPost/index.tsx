import Bounce from 'react-reveal/Bounce';

import { IPrismcPosts } from '../../DTOs/PrismicResponse';

export function CardPost({ data }: IPrismcPosts) {
  return (
    <Bounce left>
      <section className="flex items-center border-dashed border-[4px] border-gray-400 max-w-[1100px] w-full p-2  mx-auto rounded shadow-lg mobile:flex-col max-h-auto">
        <div>
          <img
            src={data.image.url}
            alt={data.image.alt}
            className="
            w-[500px] h-[250px] rounded shadow-md object-cover mobile:w-[340px] "
          />
        </div>
        <div className="flex flex-col flex-1 max-w-[450px] justify-center h-full items-center ml-4">
          <div className="text-center mobile:text-center mobile:p-2">
            <strong className="mb-3">{data.title[0].text}</strong>
            <p className="ml-3 text-gray-600 text-ellipsis ">
              {data.content[0].text}
            </p>
            <div className="flex flex-col">
              <div className="mt-2 ml-2 text-gray-700">
                <span>Tecnologias :</span>
              </div>
              <div className="flex gap-3 justify-center mt-3 flex-wrap">
                {data.tecnologies.map((tec) => (
                  <img
                    src={tec.tecs.url}
                    alt={tec.tecs.url}
                    key={tec.tecs.url}
                    className="rounded shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 justify-self-end">
            <a
              href={data.url.url}
              className="hover:text-gray-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {data.deployed
                ? 'Link para o projeto'
                : 'Link do código fonte do projeto'}
            </a>
          </div>
        </div>
      </section>
    </Bounce>
  );
}
