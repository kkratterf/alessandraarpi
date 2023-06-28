'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { ToReadList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ToReadListModal from '../ModalContent/ToReadList';

type ToReadListDesktopProps = {
  toReadList: ToReadList[];
};

const ToReadListDesktop = ({ toReadList }: ToReadListDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'vorrei leggere appena trovo il tempo';
  const extension = '.txt';
  const iconStyle = 'icon-style-global';
  const modalStyle = 'modal-style-global ml-80';

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
        iconStyle={iconStyle}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          modalStyle={modalStyle}
        >
          <ToReadListModal toReadList={toReadList} />
        </ModalBig>
      )}
    </>
  );
};

export default ToReadListDesktop;
