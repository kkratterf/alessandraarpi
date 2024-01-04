'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

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
