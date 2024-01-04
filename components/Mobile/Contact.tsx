'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

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
