import { MdDoneAll, MdOutlineArrowBack } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

interface ISuccessPorps {
  handleNewMessage: () => void;
  closeModal: () => void;
}

export function Success({ handleNewMessage, closeModal }: ISuccessPorps) {
  return (
    <div className="flex flex-col items-center justify-center px-16 py-8 relative">
      <div
        className="absolute to
      top-[-10px] right-[-10px] p-2 bg-purple-800 rounded-full text-white cursor-pointer"
        onClick={closeModal}
      >
        <AiOutlineClose />
      </div>

      <div className="flex flex-col items-center">
        <MdDoneAll size={40} color="#48BB78" />
        <span className="text-sm text-white">Mensagem enviada</span>
      </div>

      <button
        onClick={handleNewMessage}
        className="text-white underline mt-4 flex items-center gap-1"
      >
        <MdOutlineArrowBack />
        nova mensagem
      </button>
    </div>
  );
}
