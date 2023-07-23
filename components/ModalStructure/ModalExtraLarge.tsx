// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import CloseButton from '../CloseButton';

interface ModalExtraLargeProps {
  children: React.ReactNode;
  closeFunction: () => void;
  title: string;
  extension: string;
  subModalStyle: string;
}

function ModalExtraLarge({ children, closeFunction, title, extension, subModalStyle }: ModalExtraLargeProps) {
  
  return (
    <motion.div
      drag
      dragElastic={0.1}
      dragMomentum={false}
      className={subModalStyle}
    >
      <div className="absolute cursor-grab select-none z-50 bg-white border-cream-dark1 w-136 overflow-hidden border rounded-xl">
        <div className="handle flex justify-stretch w-full border-cream-dark1 border-b p-4 pb-3">
          <p className="text-black-light1 w-full cursor-grab select-none">
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

export default ModalExtraLarge;
