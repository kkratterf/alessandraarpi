// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs

function AboutModal() {

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0, delay: 0 }}
      className="relative z-40"
    >
      <div className="text-2xl cursor-default overflow-y-scroll h-96 font-bold m-4 text-black">
        Sono Alessandra Arpi e di lavoro faccio parlare aziende, professionisti
        e istituzioni come delle persone e non come delle pubblicità anni ’80.
        Mi fanno paura i luoghi comuni e le frasi che non vogliono dire niente,
        il burocratese, la scrittura oscura che nasconde. Mi impegno molto a
        scrivere cose che le persone non fanno fatica a leggere. TUTTE le
        persone. Cerco (forse disperatamente?) di far capire quanto il
        linguaggio dia forma a tutta una società, non solo ai nostri progetti.
        Lavoro con chi ha voglia di rendere accessibile, onesta, chiara e umana
        la sua comunicazione (che poi, è anche quella che funziona di più). C’è
        un sogno buttato sulla mia scrivania: rendere universale e ampia la
        comunicazione scritta delle istituzioni pubbliche, per far vivere tutty
        un po’ meglio. Ecco cosa faccio, in pratica: - Produco copy e microcopy
        accessibili - Studio il tono di voce di aziende e istituzioni che
        vogliono parlare chiaro - Lavoro al naming di nuovi progetti - Faccio
        consulenza su come fare tutte queste cose - Faccio formazione su
        comunicazione e linguaggio (amo farlo soprattutto nelle scuole)
      </div>
    </motion.section>
  );
}

export default AboutModal;
