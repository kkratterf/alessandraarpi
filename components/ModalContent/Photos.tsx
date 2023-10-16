'use client';

// Import core
// Import third parts
import NextImage from 'next/image';
import { motion } from 'framer-motion';
// Import customs
import { Photos } from '../../typings';
import urlFor from '../../lib/urlFor';

type PhotosModalProps = {
  photos: Photos[];
  openFunction: (selectedPhoto: Photos) => void;
};

function PhotosModal({ photos, openFunction }: PhotosModalProps) {
  const handlePhotoClick = (selectedPhoto: Photos) => {
    openFunction(selectedPhoto);
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delay: 0.4,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <motion.div
      className="text-xl grid grid-cols-4 gap-3 cursor-default overflow-y-scroll m-4 text-black"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {photos.map((photo) => (
        <motion.div
          variants={item}
          onClick={() => handlePhotoClick(photo)}
          key={photo._id}
          className="relative w-full aspect-[3/4] rounded-md overflow-hidden safari_fix cursor-pointer"
        >
          <NextImage
            className="object-center object-cover hover:scale-105 transition duration-300 rounded-md"
            src={urlFor(photo.mainImage).url()}
            alt={photo.title}
            fill
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PhotosModal;
