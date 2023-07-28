'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import MemoModal from '../ModalContent/Memo';
import { delay_5 } from '../../lib/delayConstants';
import {
  title_memo,
  extension_memo,
  iconStyle_memo,
  modalStyle_memo,
} from '../../lib/fileConstants';

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
        delay={delay_5}
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
