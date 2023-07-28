'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import CookiesModal from '../ModalContent/Cookies';
import { delay_3 } from '../../lib/delayConstants';
import {
  title_cookies,
  extension_cookies,
  iconStyle_cookies,
  modalStyle_cookies,
} from '../../lib/fileConstants';


const CookiesDesktop = () => {
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
        title={title_cookies}
        extension={extension_cookies}
        iconStyle={iconStyle_cookies}
        delay={delay_3}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_cookies}
          extension={extension_cookies}
          modalStyle={modalStyle_cookies}
        >
          <CookiesModal />
        </ModalBig>
      )}
    </>
  );
};

export default CookiesDesktop;
