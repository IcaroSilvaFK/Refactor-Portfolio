import { ButtonVariant } from './styles';

interface IButtonProps {
  icon?: JSX.Element;
  text?: string;
  link?: string;
  variant: 'outline' | 'full' | 'text';
}

export function Button({ icon, text, variant, link }: IButtonProps) {
  return (
    <ButtonVariant color={variant} aria-label="button">
      {variant === 'outline' || variant === 'text' ? (
        <a href={link} target="_blanck" className="block" title={text}>
          {icon}
          <span>{text}</span>{' '}
        </a>
      ) : (
        <a
          href={link}
          download="Icaro_Vieira_curriculum"
          className="flex items-center"
          title={text}
        >
          {icon}
          <span>{text}</span>
        </a>
      )}
    </ButtonVariant>
  );
}
