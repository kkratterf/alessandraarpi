'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import FooterModal from '../ModalContent/Footer';
import { delay_4 } from '../../lib/delayConstants';
import {
  title_footer,
  extension_footer,
  iconStyle_footer,
  modalStyle_footer,
} from '../../lib/fileConstants';

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
        delay={delay_4}
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
