'use client';

// Import core
import { useEffect, useState } from 'react';
// Import third parts
import { motion, AnimatePresence } from 'framer-motion';
// Import customs
import '../../styles/globals.css';
import '../../styles/font.css';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading, setLoading] = useState(true);

  return (
    <html>
      <body id="top" className="mx-auto h-screen p-4 sm:p-6 overflow-hidden">
        <AnimatePresence>
          {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
          <Header />
          {children}
          </>
        )}
        </AnimatePresence>
      </body>
    </html>
  );
}
