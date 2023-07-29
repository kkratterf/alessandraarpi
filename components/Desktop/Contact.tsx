'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ContactModal from '../ModalContent/Contact';
import { delay_2 } from '../../lib/delayConstants';

const title_contact = 'ci sentiamo?';
const extension_contact = '.txt';
const iconStyle_contact = 'icon-style-global ml-[60vw] mt-[10vh]';
const modalStyle_contact = 'modal-style-global ml-[40vw] mt-[5vh]';

const ContactDesktop = () => {
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
        title={title_contact}
        extension={extension_contact}
        iconStyle={iconStyle_contact}
        delay={delay_2}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_contact}
          extension={extension_contact}
          modalStyle={modalStyle_contact}
        >
          <ContactModal />
        </ModalBig>
      )}
    </>
  );
};

export default ContactDesktop;
