import { memo } from 'react';
import Bounce from 'react-reveal/Bounce';

interface ICardContactProps {
  icon: JSX.Element;
  text: string;
  contact: string;
}

function SimpleCardContact({ icon, text, contact }: ICardContactProps) {
  return (
    <Bounce>
      <div className="flex gap-2  rounded shadow-xl px-8 py-4 mt-2 items-center hover:scale-105 transition w-[350px] justify-center">
        <div className="flex items-center gap-2">
          <div className="animate-bounce-slow">{icon}</div>
          <p>{text}</p>
        </div>
        <div>
          <span>
            <em>{contact}</em>
          </span>
        </div>
      </div>
    </Bounce>
  );
}

export default memo(SimpleCardContact);
