'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

const MusicMobile = () => {

  const title = 'musica in loop';
  const extension = '.omg';


  return (
    <ClientSideRoute
      route="/musica-in-loop"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default MusicMobile;
