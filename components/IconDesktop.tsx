'use client';

// Import core
// Import third parts
import Draggable, { DraggableEvent } from 'react-draggable';
// Import customs

interface IconDesktopProps {
  openFunction: () => void;
  title: string,
  extension: string,
}

function IconDesktop({ openFunction, title, extension }: IconDesktopProps) {
  const eventLogger = (e: DraggableEvent, data: any) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  return (
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
        onDoubleClick={openFunction}
        className="group cursor-grab handle grid w-40 justify-items-center"
      >
        <div className="bg-green group-hover:bg-green-dark1 relative h-20 w-16 rounded-md rounded-tr-[32px] border border-cream group-hover:ring-4 group-hover:ring-red-dark1 mb-2">
          <p className="text-xl font-bold absolute bottom-0.5 left-1.5 select-none cursor-grab">
            {extension}
          </p>
        </div>
        <div className="group-hover:bg-red-dark1 rounded-md">
          <p className="text-center text-sm pt-1 px-1 pb-0 select-none cursor-grab">
            {title}
          </p>
        </div>
      </div>
    </Draggable>
  );
}

export default IconDesktop;
