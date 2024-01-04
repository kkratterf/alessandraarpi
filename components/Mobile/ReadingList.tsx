'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

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
