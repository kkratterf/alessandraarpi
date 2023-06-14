'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import AboutModal from '../ModalContent/About';

const AboutDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'ciao, inizia da qui';
  const extension = '.txt';

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
        >
        <AboutModal />
        </ModalBig>
      )}
    </>
  );
};

export default AboutDesktop;
