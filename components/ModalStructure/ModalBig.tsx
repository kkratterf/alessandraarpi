
// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import CloseButton from '../CloseButton';

interface ModalBigProps {
  children: React.ReactNode;
  closeFunction: () => void;
  title: string;
  extension: string;
  modalStyle: string;
}

function ModalBig({ children, closeFunction, title, extension, modalStyle }: ModalBigProps) {

  return (
    <motion.div
      drag
      dragElastic={0.1}
      dragMomentum={false}
      className={modalStyle}
    >
      <div className="absolute cursor-grab select-none z-50 bg-white border-black w-128 overflow-hidden border rounded-xl">
        <div className="handle flex justify-stretch w-full border-black border-b p-4 pb-3">
          <p className="text-black w-full cursor-grab select-none">
            {title}
            {extension}
          </p>
          <button onClick={closeFunction}>
            <CloseButton />
          </button>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default ModalBig;
