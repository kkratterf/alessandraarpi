'use client';

// Import core
import React from 'react';
import { useState } from 'react';
// Import third parts
import Draggable from 'react-draggable';
import CloseButton from '../CloseButton';
// Import customs
import { ReadingList } from '../../typings';

type ReadingListDesktopProps = {
  readingList: ReadingList[];
};

const ReadingListDesktop = ({ readingList }: ReadingListDesktopProps) => {

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
              sto leggendo.txt
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
                sto leggendo.txt
              </p>
              <button onClick={closeModal}>
                <CloseButton />
              </button>
            </div>
            <div className="text-xl cursor-default overflow-y-scroll h-56 m-4 text-black">
              <p className="text-black">Tutte in contemporanea, ovviamente.</p>
              <ul>
                {readingList.map((readingList) => (
                  <li key={readingList._id} className="text-black">
                    {!readingList.strike ? (
                      <span> - {readingList.title}</span>
                    ) : (
                      <span className="line-through">
                        - {readingList.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <textarea className="w-full h-full border-0 ring-0 outline-0 text-black">
                -
              </textarea>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default ReadingListDesktop;
