import { motion } from 'framer-motion';

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
      <Marquee>
        {data.map((image) => (
          <motion.img
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
