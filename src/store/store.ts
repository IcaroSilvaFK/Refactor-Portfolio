import create from "zustand";
import { IUseModalMobileProps } from "../interface/ModalMobile.interface";

export const useModalMobile = create<IUseModalMobileProps>()((set) => ({
  isOpen: false,
  toggleModal: () => {
    set((prev) => ({ isOpen: !prev.isOpen }));
  },
}));
