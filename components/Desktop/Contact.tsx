'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ContactModal from '../ModalContent/Contact';

const ContactDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'contact';
  const extension = '.txt';
  const xDesktop = 40;
  const yDesktop = 10;
  const xModal = 300;
  const yModal = 100;

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
        x={xDesktop}
        y={yDesktop}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          x={xModal}
          y={yModal}
        >
          <ContactModal />
        </ModalBig>
      )}
    </>
  );
};

export default ContactDesktop;
