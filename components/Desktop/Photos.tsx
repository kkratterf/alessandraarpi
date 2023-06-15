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
  const title = 'fotine';
  const extension = '.fol';
  const extensionPhoto = '.img';
  const xDesktop = 400;
  const yDesktop = 70;
  const xModal = 500;
  const yModal = 50;
  const xSubModal = 600;
  const ySubModal = 200;

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
          <PhotosModal photos={photos} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedPhoto && (
        <ModalSmall
          closeFunction={closeSubModal}
          title={selectedPhoto.title}
          extension={extensionPhoto}
          x={xSubModal}
          y={ySubModal}
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
