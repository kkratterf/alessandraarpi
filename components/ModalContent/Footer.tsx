// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

function FooterModal() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-2xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
        © Copyright 2023 Alessandra Arpi // P.IVA IT01702610096 Senza Diletta
        Nicosia (https://www.instagram.com/dilettanicosia_ph/) non avrei foto
        che mi rappresentino e senza Federico Kratter e il suo sostegno molesto
        (https://www.kkratter.com/) non avrei un sito dal design fighissimo
      </div>
    </motion.section>
  );
}

export default FooterModal;
