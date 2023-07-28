'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ContactModal from '../ModalContent/Contact';
import { delay_2 } from '../../lib/delayConstants';
import {
  title_contact,
  extension_contact,
  iconStyle_contact,
  modalStyle_contact,
} from '../../lib/fileConstants';


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
