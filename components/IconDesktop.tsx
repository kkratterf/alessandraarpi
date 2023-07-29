'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

interface IconDesktopProps {
  openFunction: () => void;
  title: string,
  extension: string,
  iconStyle: string,
  delay: number,
}

function IconDesktop({
  openFunction,
  title,
  extension,
  iconStyle,
  delay,
}: IconDesktopProps) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, delay }}
    >
      <motion.div
        drag
        dragElastic={0.1}
        dragMomentum={false}
        onDoubleClick={openFunction}
        className={iconStyle}
      >
        <div className="group cursor-grab grid w-36 justify-items-center">
          <div className="bg-red relative h-20 w-16 rounded-md rounded-tr-[32px] group-hover:ring-4 group-hover:ring-red-dark2 mb-2 transition duration-300">
            <p className="text-cream text-xl font-bold absolute bottom-0 left-1.5 select-none cursor-grab">
              {extension}
            </p>
          </div>
          <div className="group-hover:bg-cream-light1 rounded-md transition duration-300">
            <p className="text-center text-sm pt-1 px-1.5 pb-0 select-none cursor-grab transition duration-300">
              {title}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default IconDesktop;
