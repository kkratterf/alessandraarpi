'use client';

// Import core
import Link from 'next/link';
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
      <Link href="/" className="cursor-pointer">
        <nav className="bg-transparent z-0 cursor-pointer">
          <h1 className="text-3xl text-red bg-transparent font-bold select-none cursor-pointer">
            alessandra arpi
          </h1>
        </nav>
      </Link>
    </motion.section>
  );
}

export default Header;
