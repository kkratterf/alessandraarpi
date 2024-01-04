'use client';

// Import core
import { useState } from 'react';
// Import customs
import IconDesktop from '@/components/IconDesktop';
import ModalBig from '@/components/ModalStructure/ModalBig';
import CookiesModal from '@/components/ModalContent/Cookies';
import { delay_4 } from '@/lib/delayConstants';

const title_cookies = 'biscotti & privacy';
const extension_cookies = '.txt';
const iconStyle_cookies = 'icon-style-global ml-[75vw] mt-[30vh]';
const modalStyle_cookies = 'modal-style-global ml-[40vw] mt-[15vh]';

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
        delay={delay_4}
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
