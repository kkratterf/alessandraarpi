'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

const ReadingListMobile = () => {

  const title = 'sto leggendo';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/sto-leggendo"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default ReadingListMobile;
