interface ICardContactProps {
  icon: JSX.Element;
  text: string;
  contact: string;
}

export function SimpleCardContact({ icon, text, contact }: ICardContactProps) {
  return (
    <div className='flex gap-2  rounded shadow-xl px-8 py-4 mt-2 items-center hover:scale-105 transition w-[350px] justify-center'>
      <div className='flex items-center gap-2'>
        <div>{icon}</div>
        <p>{text}</p>
      </div>
      <div>
        <span>
          <em>{contact}</em>
        </span>
      </div>
    </div>
  );
}
