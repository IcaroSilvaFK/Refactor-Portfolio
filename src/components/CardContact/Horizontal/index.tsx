interface IHorizontalCardProps {
  image: string;
  link: string;
  alt: string;
}

export function HorizontalCard({ image, link, alt }: IHorizontalCardProps) {
  return (
    <button>
      <a href={link}>
        <img src={image} alt={alt} />
      </a>
    </button>
  );
}
