'use client';

// Import core
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
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

  const iubendaConfig = `
    var _iub = _iub || [];
    _iub.csConfiguration = {
      "consentOnContinuedBrowsing": false,
      "ccpaAcknowledgeOnDisplay": true,
      "whitelabel": false,
      "lang": "it",
      "enableCcpa": true,
      "countryDetection": true,
      "googleAdditionalConsentMode": true,
      "isTCFConsentGlobal": false,
      "perPurposeConsent": true,
      "enableTcf": true,
      "cookiePolicyId": ${process.env.NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID},
      "siteId": ${process.env.NEXT_PUBLIC_IUBENDA_SITE_ID},
      "banner": {
        "acceptButtonDisplay": true,
        "customizeButtonDisplay": true,
        "position": "float-bottom-left",
        "rejectButtonDisplay": true,
        "acceptButtonColor": "#CE564B",
        "acceptButtonCaptionColor": "white",
        "customizeButtonColor": "#FEF4E8",
        "customizeButtonCaptionColor": "#5F554A",
        "rejectButtonColor": "#FEF4E8",
        "rejectButtonCaptionColor": "#5F554A",
        "textColor": "#5F554A",
        "backgroundColor": "#FFFFFF"
      }
    };
  `;

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
      <Script src="https://example.com/script.js" />
      <Script
        id="iubenda-cs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: iubendaConfig }}
      />
      <Script src="https://cs.iubenda.com/autoblocking/2054466.js" />
      <Script src="//cdn.iubenda.com/cs/tcf/stub-v2.js" />
      <Script src="//cdn.iubenda.com/cs/tcf/safe-tcf-v2.js" />
      <Script src="//cdn.iubenda.com/cs/ccpa/stub.js" />
      <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" async />
    </html>
  );
}
