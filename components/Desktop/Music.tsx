'use client';

// Import core
import React from 'react';
import { useState } from 'react';
// Import third parts
// Import customs
import { MusicList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import MusicModal from '../ModalContent/Music';

type MusicListDesktopProps = {
  musicList: MusicList[];
};

const MusicListDesktop = ({ musicList }: MusicListDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'musica ora in fissa per scrivere';
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
          <MusicModal musicList={musicList} />
        </ModalBig>
      )}
    </>
  );
};

export default MusicListDesktop;
