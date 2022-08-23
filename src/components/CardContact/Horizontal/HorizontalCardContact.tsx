import { memo } from 'react';

interface IHorizontalCardProps {
  image: string;
  link: string;
  alt: string;
}

function HorizontalCard({ image, link, alt }: IHorizontalCardProps) {
  return (
    <button
      className="flex items-center hover:scale-110 transition"
      aria-label="button"
    >
      <a href={link} title={alt}>
        <img src={image} alt={alt} width={130} className="shadow-xl" />
      </a>
    </button>
  );
}

export default memo(HorizontalCard);
