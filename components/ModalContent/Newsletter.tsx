// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs


function NewsletterModal() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative z-40"
    >
      <div className="text-2xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
        <p>
          Cosa ci trovi dentro: è la a newsletter che cerca (disperatamente?) di
          raccontare come il linguaggio costruisca la realtà in cui viviamo.
          Riflessioni su scrittura di tutti i giorni e linguaggio attento, vivo,
          aperto, che migliora pure la vita. Robe che mi succedono e risorse
          utili che fanno riflettere su come comunichiamo. Quando: ogni due
          martedì. Per chi, perché: per chi vuole ragionare meglio su come usa
          le parole per muoversi nel mondo, per costruire una realtà più alla
          portata di tutty.
        </p>
        <iframe
          src="https://fckt25.substack.com/embed"
          width="480"
          height="320"
        ></iframe>
      </div>
    </motion.section>
  );
}

export default NewsletterModal;
