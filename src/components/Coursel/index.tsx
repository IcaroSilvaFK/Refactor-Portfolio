import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { apiBackend } from "../../configs/axiosBackend";

interface ICarouselTecsProps {
  image_url: string;
  alt: string;
  id: string;
}

export function CarouselTecs() {
  const [width, setWidth] = useState(0);
  const [images, setImages] = useState<ICarouselTecsProps[]>([]);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
    (async () => {
      try {
        const { data } = await apiBackend.get("image");
        setImages(data);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);

  return (
    <div className="w-[100%] flex justify-center gap-4 relative p-8 ">
      {images.map((image) => (
        <motion.img
          src={image.image_url}
          alt={image.alt}
          animate={{ x: [-width, width + 200] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="rounded shadow-xl"
          key={image.id}
        />
      ))}
      {/* {isError && (
        <div className="flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="shadow-2xl w-16 h-16 flex justify-center items-center bg-gray-700"
          >
            <BiErrorCircle color="#c53030" size={35} />
          </motion.div>
        </div>
      )} */}
    </div>
  );
}

// className="hover:scale-105 transition  absolute right-0 grayscale animate-carousel"
