import create from "zustand";

interface IUseModalMobileProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const useModalMobile = create<IUseModalMobileProps>()((set) => ({
  isOpen: false,
  toggleModal: () => {
    set((prev) => ({ isOpen: !prev.isOpen }));
  },
}));
