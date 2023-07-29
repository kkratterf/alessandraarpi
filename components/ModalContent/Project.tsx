'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import { Block } from '../../typings';
import Article from '../Article';

type ProjectModalProps = {
  title: string;
  id: string;
  image: any;
  category: string;
  body: Block[];
};

function ProjectModal({ id, image, title, category, body }: ProjectModalProps) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-xl cursor-default overflow-y-scroll m-4 h-128 text-black">
        <Article category={category} title={title} image={image} body={body} />
      </div>
    </motion.section>
  );
}

export default ProjectModal;
