// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

function ContactModal() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-2xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
        Il modo più veloce per scrivermi è mandarmi una mail:
        alessandra.arpi@gmail.com Cerco di rispondere a tutte entro 48 ore - mi
        ci impegno. Se vuoi sbirciare meglio come comunico, il posto più
        aggiornato è Instagram: mi trovi come @irrequieta_
      </div>
    </motion.section>
  );
}

export default ContactModal;
