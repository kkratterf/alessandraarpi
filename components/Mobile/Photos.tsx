'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
