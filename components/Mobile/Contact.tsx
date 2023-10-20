'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

const ContactMobile = () => {

  const title = 'ci sentiamo?';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/ci-sentiamo"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default ContactMobile;
