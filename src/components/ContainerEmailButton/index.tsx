import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

import { ContactForm } from "../ContactForm";

export function ContainerEmailButton() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className='fixed bottom-20 right-8 flex items-center justify-center flex-col shadow-xl'
      onClick={(e) => {
        e.stopPropagation();
        setVisible(false);
      }}
    >
      {visible && <ContactForm />}
      {visible === false && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setVisible((prev) => !prev);
          }}
          className='flex items-center justify-center p-2 bg-purple-800 rounded-full'
        >
          <HiOutlineMail color='#fff' size={20} />
        </button>
      )}
    </div>
  );
}
