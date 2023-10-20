'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
