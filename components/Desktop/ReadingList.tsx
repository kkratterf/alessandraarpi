'use client';

// Import core
import { useState } from 'react';
// Import customs
import { ReadingList } from '@/typings';
import IconDesktop from '@/components/IconDesktop';
import ModalBig from '@/components/ModalStructure/ModalBig';
import ReadingListModal from '@/components/ModalContent/ReadingList';
import { delay_4 } from '@/lib/delayConstants';

const title_readingList = 'sto leggendo';
const extension_readingList = '.txt';
const iconStyle_readingList = 'icon-style-global ml-[5vw] mt-[42vh]';
const modalStyle_readingList = 'modal-style-global ml-[5vw] mt-[35vh]';

type ReadingListDesktopProps = {
  readingList: ReadingList[];
};

const ReadingListDesktop = ({ readingList }: ReadingListDesktopProps) => {
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
        title={title_readingList}
        extension={extension_readingList}
        iconStyle={iconStyle_readingList}
        delay={delay_4}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_readingList}
          extension={extension_readingList}
          modalStyle={modalStyle_readingList}
        >
          <ReadingListModal readingList={readingList} />
        </ModalBig>
      )}
    </>
  );
};

export default ReadingListDesktop;
