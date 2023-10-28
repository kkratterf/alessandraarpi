'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import PageContainer from '../../../components/PageContainer';

function MemoContent() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">Appunti a caso</h1>
        <div className="relative z-40 text-lg cursor-default space-y-4 text-black">
          <textarea className="w-full h-[80vh] border-0 ring-0 outline-0 bg-transparent text-black">
            Sul mio vero desktop ho almeno 4 file con questo nome. Sarà
            catartico? Non saprei, se vuoi però puoi scrivere qualcosa anche tu
          </textarea>
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default MemoContent;
