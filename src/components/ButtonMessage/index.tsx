import { useEffect, useState } from "react";
import { RiMessage3Line } from "react-icons/ri";

import { Form } from "../Form";

export function ButtonUp() {
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      window.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Escape": {
            if (visible) setVisible(false);
          }
        }
      });
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function handleChangeVisible() {
    setVisible((prev) => !prev);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='fixed bottom-8 right-8 my-8 flex items-center justify-center  bg-purple-800 rounded'
    >
      {visible && <Form closeModal={closeModal} />}

      {visible === false && (
        <button
          onClick={handleChangeVisible}
          className='fixed bottom-8 right-8 bg-purple-800 p-2 rounded-full cursor-pointer shadow'
        >
          <RiMessage3Line size={20} color='#fff' />
        </button>
      )}
    </div>
  );
}
