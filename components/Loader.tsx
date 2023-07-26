'use client'; 

// Import core
import { useEffect } from 'react';
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
      delay: 8,
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
      <div className="background flex items-center fixed top-0 left-0 bg-red cursor-wait select-none w-full h-full z-50">
        <p className="text-center mx-auto text-3xl text-cream leading-normal space-y-4 z-40 !cursor-progress">
          <TypeAnimation
            sequence={[
              'Oppalà, ci siamo:',
              1000,
              'le cose ganze ci mettono un po’',
              1000,
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
