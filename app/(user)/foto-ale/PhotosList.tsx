'use client';

// Import core
import { motion } from 'framer-motion';
import NextImage from 'next/image';
// Import customs
import urlFor from '@/lib/urlFor';
import { Photos } from '@/typings';
import PageContainer from '@/components/PageContainer';

type Props = {
  photos: Photos[];
};

function PhotosList({ photos }: Props) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">foto_Ale</h1>
        <div className="relative z-40 grid sm:grid-cols-2 gap-6 text-lg cursor-default text-black">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="relative w-full aspect-[3/4] rounded-md overflow-hidden safari_fix"
            >
              <NextImage
                className="object-center object-cover rounded-md"
                src={urlFor(photo.mainImage).url()}
                alt={photo.title}
                fill
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default PhotosList;
