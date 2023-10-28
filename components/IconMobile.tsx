'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

interface IconMobileProps {
  title: string;
  extension: string;
}

function IconMobile({
  title,
  extension,
}: IconMobileProps) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative"
    >
      <div className="grid w-36 justify-items-center">
        <div className="bg-red relative h-20 w-16 rounded-md rounded-tr-[32px] mb-2">
          <p className="text-cream text-xl font-bold absolute bottom-0 left-1.5 select-none cursor-grab">
            {extension}
          </p>
        </div>
        <div>
          <p className="text-center text-sm pt-1 px-1.5 pb-0 select-none cursor-grab">
            {title}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default IconMobile;
