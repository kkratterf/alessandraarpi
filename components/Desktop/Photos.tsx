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
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
        >
          <PhotosModal photos={photos} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedPhoto && (
        <ModalSmall
          closeFunction={closeSubModal}
          title={selectedPhoto.title}
          extension={extension}
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
