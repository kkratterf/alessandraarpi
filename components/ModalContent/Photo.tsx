'use client';

// Import core
import { useState } from 'react';
// Import third parts
import NextImage from 'next/image';
import { StaticImageData } from 'next/image';
import urlFor from '../../lib/urlFor';
// Import customs

type PhotoModalProps = {
  title: string;
  id: string;
  image: StaticImageData;
};

function PhotoModal({ id, image, title }: PhotoModalProps) {
  return (
    <div className="text-xl grid grid-cols-4 gap-3 cursor-default overflow-y-scroll m-4 text-black">
      <>
        <div
          key={id}
          className="relative w-full aspect-w-1 h-56 rounded-md overflow-hidden safari_fix cursor-pointer"
        >
          <NextImage
            className="object-center object-cover hover:scale-105 transition duration-500 rounded-md"
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
