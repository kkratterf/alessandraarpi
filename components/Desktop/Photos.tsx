'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { Photos } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import PhotosModal from '../ModalContent/Photos';
import ModalSmall from '../ModalStructure/ModalSmall';
import PhotoModal from '../ModalContent/Photo';
import { delay_8 } from '../../lib/delayConstants';
import {
  title_photos,
  extension_photos,
  iconStyle_photos,
  modalStyle_photos,
  extensionPhoto_photos,
  subModalStyle_photos,
} from '../../lib/fileConstants';

type PhotosDesktopProps = {
  photos: Photos[];
};

const PhotosDesktop = ({ photos }: PhotosDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const [isSubOpen, setIsSubOpen] = useState(false);
  function closeSubModal() {
    setIsSubOpen(false);
  }
  const openSubModal = (selectedPhoto: Photos) => {
    setSelectedPhoto(selectedPhoto);
    setIsSubOpen(true);
  };

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title_photos}
        extension={extension_photos}
        iconStyle={iconStyle_photos}
        delay={delay_8}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_photos}
          extension={extension_photos}
          modalStyle={modalStyle_photos}
        >
          <PhotosModal photos={photos} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedPhoto && (
        <ModalSmall
          closeFunction={closeSubModal}
          title={selectedPhoto.title}
          extension={extensionPhoto_photos}
          subModalStyle={subModalStyle_photos}
        >
          <PhotoModal
            id={selectedPhoto._id}
            image={selectedPhoto.mainImage}
            title={selectedPhoto.title}
          />
        </ModalSmall>
      )}
    </>
  );
};

export default PhotosDesktop;
