'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const NewsletterMobile = () => {

  const title = 'newsletter';
  const extension = '.new';


  return (
    <ClientSideRoute
      route="/newsletter"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default NewsletterMobile;
