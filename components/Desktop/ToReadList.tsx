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

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
        >
          <ToReadListModal toReadList={toReadList} />
        </ModalBig>
      )}
    </>
  );
};

export default ToReadListDesktop;
