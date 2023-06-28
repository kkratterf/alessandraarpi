'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { ShoppingList } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ShoppingListModal from '../ModalContent/ShoppingList';

type ShoppingListDesktopProps = {
  shoppingList: ShoppingList[];
};

const ShoppingListDesktop = ({ shoppingList }: ShoppingListDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'voglio compare';
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
          <ShoppingListModal shoppingList={shoppingList} />
        </ModalBig>
      )}
    </>
  );
};

export default ShoppingListDesktop;
