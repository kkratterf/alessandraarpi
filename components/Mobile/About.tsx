'use client';

// Import core
// Import customs
import IconMobile from '@/components/IconMobile';
import ClientSideRoute from '@/components/ClientSideRoute';

const AboutMobile = () => {
  
  const title = 'chi sono_def';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/chi-sono"
    >
      <IconMobile
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default AboutMobile;
