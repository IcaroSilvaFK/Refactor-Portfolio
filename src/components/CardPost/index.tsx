interface ICardPosts {
  data: {
    content: [{ text: string }];
    image: {
      alt: string;
      url: string;
    };
    title: [
      {
        text: string;
      }
    ];
    deployed: boolean;
    url: {
      url: string;
    };
    tecnologies: [{ tecs: { url: string; alt: string } }];
  };
  id: string;
}

export function CardPost({ data }: ICardPosts) {
  return (
    <section className='flex items-center border-dashed border-[4px] border-gray-400 max-w-[1000px] p-2 rounded shadow-lg mobile:flex-col'>
      <div>
        <img
          src={data.image.url}
          alt={data.image.alt}
          className='w-[40rem] rounded shadow-md'
        />
      </div>
      <div className='flex flex-col ml-4'>
        <div className='mobile:text-center mobile:p-2'>
          <strong className='mb-3'>{data.title[0].text}</strong>
          <p className='ml-3 text-gray-600'>{data.content[0].text}</p>
          <div className='flex flex-col'>
            <div className='mt-2 ml-2 text-gray-700'>
              <span>Tecnologias :</span>
            </div>
            <div className='flex gap-3 justify-center mt-3 flex-wrap'>
              {data.tecnologies.map((tec) => (
                <img
                  src={tec.tecs.url}
                  alt=''
                  key={tec.tecs.url}
                  className='rounded shadow-md hover:scale-105'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-2 '>
          <a
            href={data.url.url}
            className='hover:text-gray-600 hover:underline'
          >
            {data.deployed
              ? "Link para o projeto"
              : "Link do código fonte do projeto"}
          </a>
        </div>
      </div>
    </section>
  );
}
