'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import AboutModal from '../ModalContent/About';

const AboutDesktop = () => {
  const [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'ciao, inizia da qui';
  const extension = '.txt';
  const iconStyle = 'icon-style-global sm:ml-4 md:ml-20 lg:ml-80';
  const modalStyle = 'modal-style-global ml-80 ';

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
        iconStyle={iconStyle}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          modalStyle={modalStyle}
        >
          <AboutModal />
        </ModalBig>
      )}
    </>
  );
};

export default AboutDesktop;
