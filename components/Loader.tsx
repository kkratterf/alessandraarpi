'use client'; 

// Import core
// Import third parts
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// Import customs

const load = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    opacity: 0,
    y: 0,
    transition: {
      delay: 10,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.02,
    },
  },
};


const Loader = ({ setLoading }:any) => {

  return (
    <motion.section
      variants={load}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className="relative z-50"
    >
      <div className="flex items-center fixed top-0 left-0 bg-red cursor-wait select-none w-full h-full z-50">
        <p className="text-center mx-auto text-3xl text-cream leading-normal space-y-4 z-40 !cursor-progress">
          <TypeAnimation
            sequence={[
              '',
              1500,
              'Oppalà',
              1500,
              'lo stacchetto mentre si carica il sito',
              1500,
            ]}
            wrapper="span"
            speed={1}
            style={{ fontSize: '1em', display: 'inline-block' }}
          />
        </p>
      </div>
    </motion.section>
  );
}

export default Loader;
