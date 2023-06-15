'use client';

// Import core
import NextImage, { ImageProps } from 'next/image';
// Import third parts
import urlFor from '../../lib/urlFor';
// Import customs

type PhotoModalProps = {
  title: string;
  id: string;
  image: any;
};

function PhotoModal({ id, image, title }: PhotoModalProps) {
  return (
    <div className="text-xl cursor-default overflow-y-scroll m-4 text-black">
      <>
        <div
          key={id}
          className="relative w-full aspect-w-1 h-80 rounded-md overflow-hidden safari_fix cursor-pointer"
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
  );
}

export default PhotoModal;
