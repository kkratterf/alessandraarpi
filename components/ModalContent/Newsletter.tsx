// Import core
// Import customs


function NewsletterModal() {
  return (
    <div className="relative z-40 text-lg cursor-default overflow-y-scroll space-y-6 max-h-[80vh] p-6 text-black">
      <div className="space-y-3">
        <p>
          <b>Cosa ci trovi dentro</b>: è la a newsletter che cerca
          (disperatamente?) di raccontare come il <b>linguaggio</b> costruisca
          la realtà in cui viviamo. Riflessioni su scrittura di tutti i giorni e
          linguaggio attento, vivo, aperto, che migliora pure la vita. Robe che
          mi succedono e risorse utili che fanno riflettere su come
          comunichiamo.
        </p>
        <p>
          <b>Quando</b>: se riesco, ogni due martedì. Ma non è detto.
        </p>
        <p>
          <b>Per chi, perché</b>: per chi vuole ragionare meglio su come usa le
          parole per muoversi nel mondo, per costruire una realtà più alla
          portata di tutty.
        </p>
      </div>
      <iframe
        src="https://alessandraarpi.substack.com/embed"
        width="100%"
        height="308"
        style={{
          border: '1px solid #EEE',
          borderRadius: '8px',
          background: 'white',
          padding: '0',
        }}
      />
    </div>
  );
}

export default NewsletterModal;
