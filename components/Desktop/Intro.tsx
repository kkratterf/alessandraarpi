'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import ModalBig from '../ModalStructure/ModalBig';
import IntroModal from '../ModalContent/Intro';

const IntroDesktop = () => {
  const [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  const title_about = 'intro';
  const extension_about = '.txt';
  const modalStyle_about = 'modal-style-global ml-[28vw] mt-[18vh]';

  return (
    <>
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_about}
          extension={extension_about}
          modalStyle={modalStyle_about}
        >
          <IntroModal />
        </ModalBig>
      )}
    </>
  );
};

export default IntroDesktop;
