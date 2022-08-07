import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ICarouselTecsProps {
  image_url: string;
  alt: string;
  id: string;
}

interface ICarouselProps {
  data: ICarouselTecsProps[];
}

export function CarouselTecs({ data }: ICarouselProps) {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="w-[100%] flex justify-center gap-4 relative p-4"
      ref={divRef}
      id="container__slider"
    >
      {data.map((image) => (
        <motion.img
          src={image.image_url}
          alt={image.alt}
          className="rounded shadow-xl object-cover"
          key={image.id}
          animate={{
            x: [-width - 200, width + width],
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
