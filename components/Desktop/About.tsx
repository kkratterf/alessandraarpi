'use client';

// Import core
import React from 'react';
import { useState } from 'react';
// Import third parts
import Draggable from 'react-draggable';
import CloseButton from '../CloseButton';
// Import customs

const AboutDesktop = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  return (
    <>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 200, y: 40 }}
        grid={[1, 1]}
        scale={1}
        onStart={eventLogger}
        onDrag={eventLogger}
        onStop={eventLogger}
      >
        <div
          onDoubleClick={openModal}
          className="group cursor-grab handle grid w-40 justify-items-center"
        >
          <div className="bg-green group-hover:bg-green-dark1 relative h-20 w-16 rounded-md rounded-tr-[32px] border border-cream group-hover:ring-4 group-hover:ring-red-dark1 mb-2">
            <p className="text-xl font-bold absolute bottom-0.5 left-1.5 select-none cursor-grab">
              .txt
            </p>
          </div>
          <div className="group-hover:bg-red-dark1 rounded-md">
            <p className="text-center text-sm pt-1 px-1 pb-0 select-none cursor-grab">
              ciao, inizia da qui.txt
            </p>
          </div>
        </div>
      </Draggable>
      {isOpen && (
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 400, y: 100 }}
          grid={[1, 1]}
          scale={1}
          onStart={eventLogger}
          onDrag={eventLogger}
          onStop={eventLogger}
        >
          <div className="absolute cursor-grab select-none z-50 bg-white border-black w-128 overflow-hidden border rounded-xl">
            <div className="handle flex justify-stretch w-full border-black border-b p-4 pb-3">
              <p className="text-black w-full cursor-grab select-none">
                ciao, inizia da qui.txt
              </p>
              <button onClick={closeModal}>
                <CloseButton />
              </button>
            </div>
            <div className="text-xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
              Sono Alessandra Arpi e di lavoro faccio parlare aziende,
              professionisti e istituzioni come delle persone e non come delle
              pubblicità anni ’80. Mi fanno paura i luoghi comuni e le frasi che
              non vogliono dire niente, il burocratese, la scrittura oscura che
              nasconde. Mi impegno molto a scrivere cose che le persone non
              fanno fatica a leggere. TUTTE le persone. Cerco (forse
              disperatamente?) di far capire quanto il linguaggio dia forma a
              tutta una società, non solo ai nostri progetti. Lavoro con chi ha
              voglia di rendere accessibile, onesta, chiara e umana la sua
              comunicazione (che poi, è anche quella che funziona di più). C’è
              un sogno buttato sulla mia scrivania: rendere universale e ampia
              la comunicazione scritta delle istituzioni pubbliche, per far
              vivere tutty un po’ meglio. Ecco cosa faccio, in pratica: -
              Produco copy e microcopy accessibili - Studio il tono di voce di
              aziende e istituzioni che vogliono parlare chiaro - Lavoro al
              naming di nuovi progetti - Faccio consulenza su come fare tutte
              queste cose - Faccio formazione su comunicazione e linguaggio (amo
              farlo soprattutto nelle scuole)
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default AboutDesktop;
