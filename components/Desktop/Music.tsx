'use client';

// Import core
import React from 'react';
import { useState } from 'react';
// Import third parts
import Draggable from 'react-draggable';
import CloseButton from '../CloseButton';
// Import customs
import { MusicList } from '../../typings';

type MusicListDesktopProps = {
  musicList: MusicList[];
};

const MusicListDesktop = ({ musicList }: MusicListDesktopProps) => {
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
          className="group cursor-grab handle w-40 grid justify-items-center"
        >
          <div className="bg-green group-hover:bg-green-dark1 relative h-20 w-16 rounded-md rounded-tr-[32px] border border-cream group-hover:ring-4 group-hover:ring-red-dark1 mb-2">
            <p className="text-xl font-bold absolute bottom-0.5 left-1.5 select-none cursor-grab">
              .txt
            </p>
          </div>
          <div className="group-hover:bg-red-dark1 rounded-md">
            <p className="text-center text-sm pt-1 px-1 pb-0 select-none cursor-grab">
              musica ora in fissa per scrivere.txt
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
            <div className=" flex handle justify-stretch w-full border-black border-b p-4 pb-3">
              <p className="text-black w-full cursor-grab select-none">
                musica ora in fissa per scrivere.txt
              </p>
              <button onClick={closeModal}>
                <CloseButton />
              </button>
            </div>
            <div className="text-xl grid grid-cols-2 gap-3 cursor-default overflow-y-scroll m-4 text-black">
              {musicList.map((musicList) => (
                <iframe
                  key={musicList._id}
                  className="rounded-md"
                  src={musicList.src}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              ))}
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default MusicListDesktop;
