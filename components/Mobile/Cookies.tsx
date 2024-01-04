'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const CookiesMobile = () => {

  const title = 'biscotti & privacy';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/biscotti-&-privacy"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default CookiesMobile;
