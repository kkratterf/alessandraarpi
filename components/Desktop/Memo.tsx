'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import MemoModal from '../ModalContent/Memo';
import { delay_2 } from '../../lib/delayConstants';

const title_memo = 'appunti a caso';
const extension_memo = '.txt';
const iconStyle_memo = 'icon-style-global ml-[10vw] mt-[14vh]';
const modalStyle_memo = 'modal-style-global ml-[5vw] mt-[7vh]';

const MemoDesktop = () => {
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
        title={title_memo}
        extension={extension_memo}
        iconStyle={iconStyle_memo}
        delay={delay_2}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_memo}
          extension={extension_memo}
          modalStyle={modalStyle_memo}
        >
          <MemoModal />
        </ModalBig>
      )}
    </>
  );
};

export default MemoDesktop;
