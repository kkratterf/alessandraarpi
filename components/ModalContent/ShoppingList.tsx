// Import core
// Import third parts
// Import customs
import { ShoppingList } from '../../typings';

type ShoppingListModalProps = {
  shoppingList: ShoppingList[];
};

function ShoppingListModal({ shoppingList }: ShoppingListModalProps) {
  return (
    <div className="text-xl cursor-default overflow-y-scroll h-56 m-4 text-black">
      <p className="text-black">Tutte in contemporanea, ovviamente.</p>
      <ul>
        {shoppingList.map((shoppingList) => (
          <li key={shoppingList._id} className="text-black">
            {!shoppingList.strike ? (
              <span> - {shoppingList.title}</span>
            ) : (
              <span className="line-through">- {shoppingList.title}</span>
            )}
          </li>
        ))}
      </ul>
      <textarea className="w-full h-full border-0 ring-0 outline-0 text-black">
        -
      </textarea>
    </div>
  );
}

export default ShoppingListModal;
