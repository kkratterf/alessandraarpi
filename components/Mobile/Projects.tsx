'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

const ProjectsMobile = () => {

  const title = 'portfolio';
  const extension = '.omg';


  return (
    <ClientSideRoute
      route="/portfolio"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default ProjectsMobile;
