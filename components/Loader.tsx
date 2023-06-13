// Import core
// Import third parts
import { TypeAnimation } from 'react-type-animation';
// Import customs

function Loader() {

  return (
    <div className="background flex items-center fixed top-0 left-0 bg-cream cursor-wait select-none w-full h-full z-50">
      <p className="text-center mx-auto text-3xl text-red leading-normal space-y-4 z-40 !cursor-progress">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'All good things takes times',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            '',
          ]}
          wrapper="span"
          speed={2}
          style={{ fontSize: '1em', display: 'inline-block' }}
        />
      </p>
    </div>
  );
}

export default Loader;
