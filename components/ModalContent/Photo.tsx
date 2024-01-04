'use client';

// Import core
import NextImage from 'next/image';
// Import customs
import urlFor from '@/lib/urlFor';

type PhotoModalProps = {
  title: string;
  id: string;
  image: any;
};

function PhotoModal({ id, image, title }: PhotoModalProps) {
  return (
    <div className="relative z-40 text-xl cursor-default overflow-y-scroll p-6 text-black">
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
  );
}

export default PhotoModal;
