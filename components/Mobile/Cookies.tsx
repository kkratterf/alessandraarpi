'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
