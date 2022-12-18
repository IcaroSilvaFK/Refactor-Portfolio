import Marquee from 'react-fast-marquee';

interface ICarouselTecsProps {
  url: string;
  alt: string;
  id: string;
}

interface ICarouselProps {
  data: ICarouselTecsProps[];
}

export function CarouselTecs({ data }: ICarouselProps) {
  return (
    <div className="mt-4">
      <Marquee speed={60}>
        {data.map((image) => (
          <img
            src={image.url}
            alt={image.alt}
            className="rounded shadow-xl object-cover"
            key={image.id}
            style={{ marginLeft: 16 }}
          />
        ))}
      </Marquee>
    </div>
  );
}
