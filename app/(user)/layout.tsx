'use client';

// Import core
import { useEffect, useState } from 'react';
// Import third parts
import { AnalyticsWrapper } from '../../components/AnalyticsWrapper';
// Import customs
import '../../styles/globals.css';
import '../../styles/font.css';
import Header from '../../components/Header';
import Providers from '../../components/Providers';
import Loader from '../../components/Loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1 /*8600*/);
  });

  return (
    <html className="scroll-smooth">
      <Providers>
        <body
          id="top"
          className="mx-auto h-screen p-4 sm:p-6 overflow-hidden"
        >
          {loading && <Loader />}
          <Header />
          {children}
          <AnalyticsWrapper />
        </body>
      </Providers>
    </html>
  );
}
