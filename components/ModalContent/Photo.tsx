'use client';

// Import core
import NextImage from 'next/image';
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import urlFor from '../../lib/urlFor';

type PhotoModalProps = {
  title: string;
  id: string;
  image: any;
};

function PhotoModal({ id, image, title }: PhotoModalProps) {
  return (
    <motion.section
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-xl cursor-default overflow-y-scroll m-4 text-black">
        <>
          <div
            key={id}
            className="relative w-full aspect-w-1 h-116 rounded-md overflow-hidden safari_fix cursor-pointer"
          >
            <NextImage
              className="object-center object-cover rounded-md"
              src={urlFor(image).url()}
              alt={title}
              fill
            />
          </div>
        </>
      </div>
    </motion.section>
  );
}

export default PhotoModal;
