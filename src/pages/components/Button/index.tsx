import { ButtonVariant } from "./styles";

interface IButtonProps {
  icon?: JSX.Element;
  text?: string;
  link?: string;
  variant: "outline" | "full";
}

export function Button({ icon, text, variant, link }: IButtonProps) {
  return (
    <ButtonVariant color={variant}>
      {variant === "outline" ? (
        <a href={link} target='_blanck'>
          {icon}
          <span>{text}</span>{" "}
        </a>
      ) : (
        <a
          href={link}
          download='Icaro-curriculum'
          className='flex items-center'
        >
          {icon}
          <span>{text}</span>
        </a>
      )}
    </ButtonVariant>
  );
}
