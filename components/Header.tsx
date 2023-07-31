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
      transition={{ duration: 1.6, delay: 0.8 }}
      className="relative"
    >
      <Link href="/" className="cursor-pointer">
        <nav className="bg-transparent z-0 cursor-pointer">
          <h1 className="text-4xl text-cream-dark1 bg-transparent font-bold select-none cursor-pointer">
            alessandra arpi
          </h1>
        </nav>
      </Link>
    </motion.section>
  );
}

export default Header;
