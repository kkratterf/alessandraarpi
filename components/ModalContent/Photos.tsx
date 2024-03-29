'use client';

// Import core
import NextImage from 'next/image';
// Import customs
import { Photos } from '@/typings';
import urlFor from '@/lib/urlFor';

type PhotosModalProps = {
  photos: Photos[];
  openFunction: (selectedPhoto: Photos) => void;
};

function PhotosModal({ photos, openFunction }: PhotosModalProps) {
  const handlePhotoClick = (selectedPhoto: Photos) => {
    openFunction(selectedPhoto);
  };

  return (
    <div
      className="text-xl grid grid-cols-4 gap-3 cursor-default overflow-y-scroll m-4 text-black"
    >
      {photos.map((photo) => (
        <div
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
        </div>
      ))}
    </div>
  );
}

export default PhotosModal;
