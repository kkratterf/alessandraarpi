'use client';

// Import core
// Import third parts
// Import customs
import IconMobile from '../IconMobile';
import ClientSideRoute from '../ClientSideRoute';

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
