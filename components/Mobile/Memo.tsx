'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

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
