'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
