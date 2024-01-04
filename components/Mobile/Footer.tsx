'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const FooterMobile = () => {

  const title = 'footer';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/footer"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default FooterMobile;
