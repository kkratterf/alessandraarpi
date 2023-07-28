'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { ReadingList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ReadingListModal from '../ModalContent/ReadingList';
import { delay_10 } from '../../lib/delayConstants';
import {
  title_readingList,
  extension_readingList,
  iconStyle_readingList,
  modalStyle_readingList,
} from '../../lib/fileConstants';

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
        delay={delay_10}
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
