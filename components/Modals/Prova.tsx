'use client';

// Import core
import { Fragment } from 'react';
// Import third parts
import { Dialog, Transition } from '@headlessui/react';
import Draggable from 'react-draggable';
// Import customs


const MyModal = () => {
  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[1, 1]}
      scale={1}
      onStart={eventLogger}
      onDrag={eventLogger}
      onStop={eventLogger}
    >
      <div className="bg-white border-black w-136 border rounded-xl">
        <div className="handle text-black border-black border-b p-4">
          miracoli.tsx
        </div>
        <div className="text-5xl font-bold p-4 text-black">
          mamma quanto ho voglia di farli sti miracoli mmmm madonna ladra dovrei
          imparare da federico che è così incommensurabilmente forte
        </div>
        <input type="text-area"></input>
        <textarea className="h-40 border-0 ring-0 outline-0 text-black font-bold">
          Due pere, dentifricio, mele
        </textarea>
      </div>
    </Draggable>
  );
};

export default MyModal;