'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { MusicList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import MusicModal from '../ModalContent/Music';
import { delay_3 } from '../../lib/delayConstants';

const title_music = 'musica in loop';
const extension_music = '.omg';
const iconStyle_music = 'icon-style-global ml-[15vw] mt-[68vh]';
const modalStyle_music = 'modal-style-global ml-[5vw] mt-[28vh]';

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
        delay={delay_3}
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
