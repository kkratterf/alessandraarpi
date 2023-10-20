'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
