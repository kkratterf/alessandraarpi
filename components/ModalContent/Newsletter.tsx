// Import core
// Import third parts
// Import customs


function NewsletterModal() {
  return (
    <div className="relative z-40 text-lg cursor-default overflow-y-scroll space-y-6 max-h-[80vh] p-6 text-black">
      <div className="space-y-3">
        <p>
          Cosa ci trovi dentro: è la a newsletter che cerca (disperatamente?) di
          raccontare come il linguaggio costruisca la realtà in cui viviamo.
        </p>
        <p>
          Riflessioni su scrittura di tutti i giorni e linguaggio attento, vivo,
          aperto, che migliora pure la vita.
        </p>
        <p>
          Robe che mi succedono e risorse utili che fanno riflettere su come
          comunichiamo. Quando: ogni due martedì. Per chi, perché: per chi vuole
          ragionare meglio su come usa le parole per muoversi nel mondo, per
          costruire una realtà più alla portata di tutty.
        </p>
      </div>
      <iframe
        src="https://alessandraarpi.substack.com/embed"
        width="720"
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
