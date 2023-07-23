'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktopMobile from '../IconDesktopMobile';
import ClientSideRoute from '../ClientSideRoute';

const ProjectsMobile = () => {
  const [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'ciao, inizia da qui';
  const extension = '.txt';


  return (
    <ClientSideRoute
      route="/projects"
    >
      <IconDesktopMobile
        openFunction={openModal}
        title={title}
        extension={extension}
      />
    </ClientSideRoute>
  );
};

export default ProjectsMobile;
