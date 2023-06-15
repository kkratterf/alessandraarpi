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
  const xDesktop = 600;
  const yDesktop = 600;
  const xModal = 100;
  const yModal = 300;

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
          <ShoppingListModal shoppingList={shoppingList} />
        </ModalBig>
      )}
    </>
  );
};

export default ShoppingListDesktop;
