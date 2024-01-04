'use client';

// Import core
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
// Import customs
import '@/styles/globals.css';
import '@/styles/font.css';
import Header from '@/components/Header';
import Loader from '@/components/Loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading, setLoading] = useState(true);

  return (
    <html>
      <body id="top" className="mx-auto bg-cream h-screen p-4 sm:p-6">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </AnimatePresence>
        <Analytics />
      </body>
    </html>
  );
}
