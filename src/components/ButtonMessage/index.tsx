import { memo, useCallback, useEffect, useState } from 'react';
import { RiMessage3Line } from 'react-icons/ri';

import Form from '../Form';

function Message() {
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      window.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'Escape': {
            closeModal();
          }
        }
      });
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleChangeVisible = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed bottom-8 right-8 my-8 flex items-center justify-center  bg-purple-800 rounded shadow-xl"
    >
      {visible && <Form closeModal={closeModal} />}

      {visible === false && (
        <button
          onClick={handleChangeVisible}
          className="fixed bottom-8 right-8 bg-purple-800 p-2 rounded-full cursor-pointer shadow
            hover:scale-105 transition"
        >
          <RiMessage3Line size={20} color="#fff" />
        </button>
      )}
    </div>
  );
}

export default memo(Message);

