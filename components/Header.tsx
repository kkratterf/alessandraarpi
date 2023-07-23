'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

function Header() {
  return (
    <motion.section
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="relative"
    >
      <nav className="bg-transparent z-0">
        <h1 className="text-3xl text-red bg-transparent font-bold cursor-default select-none">
          alessandra arpi
        </h1>
      </nav>
    </motion.section>
  );
}

export default Header;
