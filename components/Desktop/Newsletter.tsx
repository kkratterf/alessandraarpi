'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import NewsletterModal from '../ModalContent/Newsletter';
import { delay_3 } from '../../lib/delayConstants';

const title_newsletter = 'newsletter';
const extension_newsletter = '.new';
const iconStyle_newsletter = 'icon-style-global ml-[25vw] mt-[22vh]';
const modalStyle_newsletter = 'modal-style-global ml-[16vw] mt-[10vh]';

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
        delay={delay_3}
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
