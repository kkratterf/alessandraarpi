// Import core
// Import third parts
// Import customs
import { ToReadList } from '../../typings';

type ToReadListModalProps = {
  toReadList: ToReadList[];
};

function ToReadListModal({ toReadList }: ToReadListModalProps) {
  return (
    <div className="text-xl cursor-default overflow-y-scroll h-56 m-4 text-black">
      <p className="text-black">Tutte in contemporanea, ovviamente.</p>
      <ul>
        {toReadList.map((toReadList) => (
          <li key={toReadList._id} className="text-black">
            {!toReadList.strike ? (
              <span> - {toReadList.title}</span>
            ) : (
              <span className="line-through">- {toReadList.title}</span>
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

export default ToReadListModal;
