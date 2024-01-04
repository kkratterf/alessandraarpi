'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const ToReadListMobile = () => {

  const title = 'leggerò';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/leggero"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default ToReadListMobile;
