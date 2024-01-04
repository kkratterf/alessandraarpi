'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

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
