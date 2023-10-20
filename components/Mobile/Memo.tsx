'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

const MemoMobile = () => {

  const title = 'appunti a caso';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/appunti-a-caso"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default MemoMobile;
