'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import NewsletterModal from '../ModalContent/Newsletter';

const NewsletterDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'newsletter';
  const extension = '.txt';
  const xDesktop = 1000;
  const yDesktop = 540;
  const xModal = 200;
  const yModal = 500;

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
        x={xDesktop}
        y={yDesktop}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          x={xModal}
          y={yModal}
        >
          <NewsletterModal />
        </ModalBig>
      )}
    </>
  );
};

export default NewsletterDesktop;
