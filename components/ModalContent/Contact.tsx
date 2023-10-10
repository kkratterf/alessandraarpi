// Import core
// Import third parts
// Import customs

function ContactModal() {
  return (
    <div className="relative z-40 text-lg cursor-default overflow-y-scroll max-h-[50vh] space-y-6 p-6 text-black">
      <div className="space-y-3">
        <p>Il modo più veloce per scrivermi è mandarmi una mail:</p>
        <a
          href="mailto:alessandra.arpi@gmail.com?subject=Say Una mail al volo!"
          className="underline underline-offset-2 text-red"
        >
          alessandra.arpi@gmail.com
        </a>
      </div>
      <p>
        Cerco di rispondere a tutte entro 48 ore - mi ci impegno.
      </p>
      <div className="space-y-3">
        <p>
          Se vuoi sbirciare meglio come comunico, il posto più aggiornato è Instagram:
        </p>
        <p>
          Mi trovi come
          <a
            href="https://www.instagram.com/irrequieta_/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-red pl-2"
          >
            @irrequieta_
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactModal;
