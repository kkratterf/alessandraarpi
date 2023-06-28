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
}

function IconDesktop({ openFunction, title, extension, iconStyle }: IconDesktopProps) {

  return (
    <motion.div
      drag
      dragElastic={0.1}
      dragMomentum={false}
      onDoubleClick={openFunction}
      className={iconStyle}
    >
      <div className="group cursor-grab grid w-36 justify-items-center">
        <div className="bg-green group-hover:bg-green-dark1 relative h-20 w-16 rounded-md rounded-tr-[32px] border border-cream group-hover:ring-4 group-hover:ring-red-dark1 mb-2">
          <p className="text-xl font-bold absolute bottom-0.5 left-1.5 select-none cursor-grab">
            {extension}
          </p>
        </div>
        <div className="group-hover:bg-red-dark1 rounded-md">
          <p className="text-center text-sm pt-1 px-1 pb-0 select-none cursor-grab">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default IconDesktop;
