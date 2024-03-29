
// Import core
import { easeOut, motion } from 'framer-motion';
// Import customs
import CloseButton from '@/components/CloseButton';

interface ModalIntroProps {
  children: React.ReactNode;
  closeFunction: () => void;
  title: string;
  extension: string;
  modalStyle: string;
}

function ModalIntro({ children, closeFunction, title, extension, modalStyle, }: ModalIntroProps) {

  return (
    <motion.section
      initial={{ x: 0, y: 20, opacity: 0, scale: 0.95 }}
      animate={{ x: -40, y: 0, opacity: 1, scale: 1 }}
      transition={{ ease: easeOut, duration: 0.8, delay: 4.8 }}
      exit={{ x: 0, y: 20, opacity: 0, scale: 0.95 }}
      style={{ transformOrigin: 'right center' }}
      className="z-50"
    >
      <motion.div
        drag
        dragElastic={0.1}
        dragMomentum={false}
        className={modalStyle}
      >
        <div className="absolute cursor-grab select-none z-50 bg-white border-black-light1 w-[45vw] overflow-hidden border rounded-xl">
          <div className="handle flex justify-stretch w-full border-black-light1 border-b p-4 pb-3">
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
    </motion.section>
  );
}

export default ModalIntro;
