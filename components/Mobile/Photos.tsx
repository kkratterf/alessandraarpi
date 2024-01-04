'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const PhotosMobile = () => {

  const title = 'foto_Ale';
  const extension = '.omg';


  return (
    <ClientSideRoute
      route="/foto-ale"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default PhotosMobile;
