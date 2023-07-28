'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { MusicList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import MusicModal from '../ModalContent/Music';
import { delay_6 } from '../../lib/delayConstants';
import {
  title_music,
  extension_music,
  iconStyle_music,
  modalStyle_music,
} from '../../lib/fileConstants';

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

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title_music}
        extension={extension_music}
        iconStyle={iconStyle_music}
        delay={delay_6}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_music}
          extension={extension_music}
          modalStyle={modalStyle_music}
        >
          <MusicModal musicList={musicList} />
        </ModalBig>
      )}
    </>
  );
};

export default MusicListDesktop;
