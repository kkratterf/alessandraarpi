'use client';

// Import core
import { useState } from 'react';
// Import customs
import IconDesktop from '@/components/IconDesktop';
import ModalBig from '@/components/ModalStructure/ModalBig';
import AboutModal from '@/components/ModalContent/About';
import { delay_2 } from '@/lib/delayConstants';

const AboutDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const title_about = 'chi sono_def';
  const extension_about = '.txt';
  const iconStyle_about = 'icon-style-global ml-[45vw] mt-[35vh]';
  const modalStyle_about = 'modal-style-global ml-[27vw] mt-[4vh]';

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title_about}
        extension={extension_about}
        iconStyle={iconStyle_about}
        delay={delay_2}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_about}
          extension={extension_about}
          modalStyle={modalStyle_about}
        >
          <AboutModal />
        </ModalBig>
      )}
    </>
  );
};

export default AboutDesktop;
