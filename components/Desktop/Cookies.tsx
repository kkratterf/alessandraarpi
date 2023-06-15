'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import CookiesModal from '../ModalContent/Cookies';

const CookiesDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'cookies';
  const extension = '.txt';
  const xDesktop = 800;
  const yDesktop = 20;
  const xModal = 10;
  const yModal = 10;

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
          <CookiesModal />
        </ModalBig>
      )}
    </>
  );
};

export default CookiesDesktop;
