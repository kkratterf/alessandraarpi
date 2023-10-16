// Import core
// Import third parts
// Import customs

function MemoModal() {
  return (
    <div className="relative z-40 text-lg cursor-default overflow-y-scroll h-[40vh] p-6 text-black">
      <textarea className="w-full h-full border-0 ring-0 outline-0 text-black">
        - Aggiungere nuovi esempi nelle slide per il corso web copy 
        - Preparare il workshop per scrivere i testi di un sito 
        - Ricordarsi di prendere il volo per Londra (!) 
        - Aggiornare spunti newsletter
      </textarea>
    </div>
  );
}

export default MemoModal;
