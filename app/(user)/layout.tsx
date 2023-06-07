"use client"

// Import core
import { useEffect, useState } from "react";
// Import third parts
import { AnalyticsWrapper } from "../../components/AnalyticsWrapper";
// Import customs
import "../../styles/globals.css";
import "../../styles/font.css";
import Header from "../../components/Header";
import Providers from "../../components/Providers";
import Loader from "../../components/Loader";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000);
  });


  return (
    <html className="scroll-smooth">
      <Providers>
        <body
          //onMouseEnter={() => setCursorVariant("hover")}
          id="top"
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-16 overflow-x-hidden scroll-smooth"
        >
          {!loading ? (
            <>
              <Header />
              {children}
            </>
          ) : (
            <Loader />
          )}
          <AnalyticsWrapper />
        </body>
      </Providers>
    </html>
  );
}