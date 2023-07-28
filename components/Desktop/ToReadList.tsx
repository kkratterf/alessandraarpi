'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { ToReadList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ToReadListModal from '../ModalContent/ToReadList';
import { delay_11 } from '../../lib/delayConstants';
import {
  title_toReadList,
  extension_toReadList,
  iconStyle_toReadList,
  modalStyle_toReadList,
} from '../../lib/fileConstants';

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

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title_toReadList}
        extension={extension_toReadList}
        iconStyle={iconStyle_toReadList}
        delay={delay_11}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_toReadList}
          extension={extension_toReadList}
          modalStyle={modalStyle_toReadList}
        >
          <ToReadListModal toReadList={toReadList} />
        </ModalBig>
      )}
    </>
  );
};

export default ToReadListDesktop;
