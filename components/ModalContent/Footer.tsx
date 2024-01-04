// Import core
// Import customs

function FooterModal() {
  return (
    <footer className="relative z-40 text-lg cursor-default overflow-y-scroll p-6 space-y-4 text-black">
      <b>© Copyright 2023 Alessandra Arpi // P.IVA IT01702610096</b>
      <p>
        Senza
        <a
          href="https://www.instagram.com/dilettanicosia_ph/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 text-red mx-2"
        >
          Diletta Nicosia
        </a>
        non avrei foto che mi rappresentino davvero e senza
        <a
          href="https://www.kkratter.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 text-red mx-2"
        >
          Federico Kratter
        </a>
        e il suo sostegno molesto non avrei un sito dal design così ganzo.
      </p>
      <p>
        Menzione d’onore a
        <a
          href="https://www.giovannabazzoni.it/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 text-red mx-2"
        >
          Giovanna Bazzoni
        </a>
        per il pregevole supporto editing (fosse solo quello).
      </p>
    </footer>
  );
}

export default FooterModal;
