// Import core
// Import third parts
// Import customs

function ContactModal() {
  return (
    <div className="relative z-40 text-lg cursor-default overflow-y-scroll max-h-[50vh] space-y-5 p-6 text-black">
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
        Cerco di rispondere a tutte entro <b>48 ore</b> - mi ci impegno.
      </p>
      <div className="space-y-3">
        <p>
          Se vuoi sbirciare le mie innumerevoli stories o mandarmi un meme, vola
          su <b> Instagram</b>:
        </p>
        <p>
          mi trovi come
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
      <div className="space-y-3">
        <p>
          Oppure puoi farti un giro su
          <a
            href="https://www.linkedin.com/in/alessandra-arpi/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-red pl-2"
          >
            Linkedin
          </a>
          , che non adoro ma sì, serve
        </p>
      </div>
    </div>
  );
}

export default ContactModal;
