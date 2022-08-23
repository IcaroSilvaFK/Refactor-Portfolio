import { HiMenu } from 'react-icons/hi';

import { useModalMobile } from '../../../store/store';

export function MenuMobile() {
  const { toggleModal } = useModalMobile((state) => state);

  return (
    <button
      onClick={toggleModal}
      className="hidden mobile:block"
      aria-label="button"
    >
      <HiMenu size={25} />
    </button>
  );
}
