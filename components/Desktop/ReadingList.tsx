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
  const xDesktop = 400;
  const yDesktop = 200;
  const xModal = 400;
  const yModal = 200;

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
          <ReadingListModal readingList={readingList} />
        </ModalBig>
      )}
    </>
  );
};

export default ReadingListDesktop;
