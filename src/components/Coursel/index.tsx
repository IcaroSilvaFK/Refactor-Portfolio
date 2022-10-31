import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
interface ICarouselTecsProps {
  url: string;
  alt: string;
  id: string;
}

interface ICarouselProps {
  data: ICarouselTecsProps[];
}

export function CarouselTecs({ data }: ICarouselProps) {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div ref={divRef} id="container__slider" className="mt-4 flex gap-4">
      {data.map((image) => (
        <motion.img
          src={image.url}
          alt={image.alt}
          className="rounded shadow-xl object-cover"
          key={image.id}
          animate={{
            x: [-width - 200, width + width / 2],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
