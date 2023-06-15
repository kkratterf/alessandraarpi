// Import core
// Import third parts
import Draggable, { DraggableEvent } from 'react-draggable';
// Import customs
import CloseButton from '../CloseButton';

interface ModalSmallProps {
  children: React.ReactNode;
  closeFunction: () => void;
  title: string;
  extension: string;
  x: number,
  y: number,
}

function ModalSmall({ children, closeFunction, title, extension, x, y }: ModalSmallProps) {
  const eventLogger = (e: DraggableEvent, data: any) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x, y }}
      grid={[1, 1]}
      scale={1}
      onStart={eventLogger}
      onDrag={eventLogger}
      onStop={eventLogger}
    >
      <div className="absolute cursor-grab select-none z-50 bg-white border-black w-96 overflow-hidden border rounded-xl">
        <div className="handle flex justify-stretch w-full border-black border-b p-4 pb-3">
          <p className="text-black w-full cursor-grab select-none">
            {title}
            {extension}
          </p>
          <button onClick={closeFunction}>
            <CloseButton />
          </button>
        </div>
        {children}
      </div>
    </Draggable>
  );
}

export default ModalSmall;
