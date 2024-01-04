'use client';

// Import core
import { useState } from 'react';
// Import customs
import ModalIntro from '@/components/ModalStructure/ModalIntro';
import IntroModal from '@/components/ModalContent/Intro';

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
        <ModalIntro
          closeFunction={closeModal}
          title={title_about}
          extension={extension_about}
          modalStyle={modalStyle_about}
        >
          <IntroModal />
        </ModalIntro>
      )}
    </>
  );
};

export default IntroDesktop;
