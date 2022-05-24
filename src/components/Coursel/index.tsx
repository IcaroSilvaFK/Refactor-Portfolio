import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

interface ICarouselTecsProps {
  image_url: string;
  alt: string;
  id: string;
}

interface ICarouselProps{
  data: ICarouselTecsProps[]
  
}

export function CarouselTecs({data}:ICarouselProps ) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth)
  },[])
  return (
    <div className="w-[100%] flex justify-center gap-4 relative p-8 ">
        {
          data.map(image => (
            <motion.img
              src={image.image_url}
              alt={image.alt}
              animate={{ x: [-width, width + 200] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="rounded shadow-xl"
              key={image.id}
            />
          ))
        }
    </div>
  );
}
