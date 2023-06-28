'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { ReadingList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ReadingListModal from '../ModalContent/ReadingList';

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
  const title = 'sto leggendo';
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
          <ReadingListModal readingList={readingList} />
        </ModalBig>
      )}
    </>
  );
};

export default ReadingListDesktop;
