'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import PageContainer from '../../../components/PageContainer';

function FooterContent() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">Footer</h1>
        <div className="relative z-40 text-lg cursor-default space-y-4 text-black">
          <b>© Copyright 2023 Alessandra Arpi // P.IVA IT01702610096</b>
          <p>
            Senza
            <a
              href="https://www.instagram.com/dilettanicosia_ph/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-red mx-2"
            >
              Diletta Nicosia
            </a>
            non avrei foto che mi rappresentino davvero e senza
            <a
              href="https://www.kkratter.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-red mx-2"
            >
              Federico Kratter
            </a>
            e il suo sostegno molesto non avrei un sito dal design così ganzo.
          </p>
          <p>
            Menzione d’onore a
            <a
              href="https://www.giovannabazzoni.it/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-red mx-2"
            >
              Giovanna Bazzoni
            </a>
            per il pregevole supporto editing (fosse solo quello).
          </p>
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default FooterContent;
