// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs


function NewsletterModal() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-2xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
        <p>Hello world</p>
      </div>
    </motion.section>
  );
}

export default NewsletterModal;
