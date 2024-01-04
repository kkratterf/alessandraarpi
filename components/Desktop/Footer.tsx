'use client';

// Import core
import { useState } from 'react';
// Import customs
import IconDesktop from '@/components/IconDesktop';
import ModalBig from '@/components/ModalStructure/ModalBig';
import FooterModal from '@/components/ModalContent/Footer';
import { delay_3 } from '@/lib/delayConstants';

const title_footer = 'footer';
const extension_footer = '.txt';
const iconStyle_footer = 'icon-style-global ml-[70vw] mt-[70vh]';
const modalStyle_footer = 'modal-style-global ml-[45vw] mt-[52vh]';

const FooterDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title_footer}
        extension={extension_footer}
        iconStyle={iconStyle_footer}
        delay={delay_3}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_footer}
          extension={extension_footer}
          modalStyle={modalStyle_footer}
        >
          <FooterModal />
        </ModalBig>
      )}
    </>
  );
};

export default FooterDesktop;
