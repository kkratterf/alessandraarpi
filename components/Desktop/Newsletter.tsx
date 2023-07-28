'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import NewsletterModal from '../ModalContent/Newsletter';
import { delay_7 } from '../../lib/delayConstants';
import {
  title_newsletter,
  extension_newsletter,
  iconStyle_newsletter,
  modalStyle_newsletter,
} from '../../lib/fileConstants';

const NewsletterDesktop = () => {
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
        title={title_newsletter}
        extension={extension_newsletter}
        iconStyle={iconStyle_newsletter}
        delay={delay_7}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_newsletter}
          extension={extension_newsletter}
          modalStyle={modalStyle_newsletter}
        >
          <NewsletterModal />
        </ModalBig>
      )}
    </>
  );
};

export default NewsletterDesktop;
