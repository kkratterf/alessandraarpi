'use client';

// Import core
import { motion } from 'framer-motion';
// Import customs
import PageContainer from '@/components/PageContainer';
import { MusicList } from '@/typings';

type MusicListProps = {
  musicList: MusicList[];
};

function MusicList({ musicList }: MusicListProps) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">Musica in loop</h1>
        <div className="relative z-40 grid sm:grid-cols-2 gap-4 text-lg cursor-default text-black">
          {musicList.map((musicList) => (
            <div key={musicList._id}>
              <iframe
                className="rounded-md"
                src={musicList.src}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default MusicList;
