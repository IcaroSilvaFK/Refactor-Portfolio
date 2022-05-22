interface IHorizontalCardProps {
  image: string;
  link: string;
  alt: string;
}

export function HorizontalCard({ image, link, alt }: IHorizontalCardProps) {
  return (
    <button className="flex items-center hover:scale-110 transition">
      <a href={link}>
        <img src={image} alt={alt} width={130} className="shadow-xl" />
      </a>
    </button>
  );
}
