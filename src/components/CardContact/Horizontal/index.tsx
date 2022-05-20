import Bounce from "react-reveal/Bounce";

interface IHorizontalCardProps {
  image: string;
  link: string;
  alt: string;
}

export function HorizontalCard({ image, link, alt }: IHorizontalCardProps) {
  return (
    <Bounce>
      <button className="flex items-center hover:animate-levite transition">
        <a href={link}>
          <img src={image} alt={alt} width={130} className="shadow-xl" />
        </a>
      </button>
    </Bounce>
  );
}
