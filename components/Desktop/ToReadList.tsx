'use client';

// Import core
import { useState } from 'react';
// Import customs
import { ToReadList } from '@/typings';
import IconDesktop from '@/components/IconDesktop';
import ModalBig from '@/components/ModalStructure/ModalBig';
import ToReadListModal from '@/components/ModalContent/ToReadList';
import { delay_4 } from '@/lib/delayConstants';

const title_toReadList = 'leggerò';
const extension_toReadList = '.txt';
const iconStyle_toReadList = 'icon-style-global ml-[36vw] mt-[5vh]';
const modalStyle_toReadList = 'modal-style-global ml-[22vw] mt-[2vh]';

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
        delay={delay_4}
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
