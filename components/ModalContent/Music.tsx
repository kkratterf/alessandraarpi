// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import { MusicList } from '../../typings';

type MusicListModalProps = {
  musicList: MusicList[];
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
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

function MusicModal({ musicList }: MusicListModalProps) {
  return (
    <motion.div
      className="text-xl grid grid-cols-2 gap-3 cursor-default overflow-y-scroll m-4 text-black"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {musicList.map((musicList) => (
        <motion.div key={musicList._id} variants={item}>
          <iframe
            className="rounded-md"
            src={musicList.src}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default MusicModal;
