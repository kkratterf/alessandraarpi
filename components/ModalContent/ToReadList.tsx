// Import core
// Import third parts
// Import customs
import { ToReadList } from '../../typings';

type ToReadListModalProps = {
  toReadList: ToReadList[];
};

function ToReadListModal({ toReadList }: ToReadListModalProps) {
  return (
    <div className="relative z-40 text-base cursor-default overflow-y-scroll max-h-[50vh] p-6 text-black">
      <p className="text-black text-lg pb-3">
        Tutte in contemporanea, ovviamente.
      </p>
      <ul>
        {toReadList.map((toReadList) => (
          <li key={toReadList._id} className="text-black pb-1 italic">
            {!toReadList.strike ? (
              <span> - {toReadList.title}</span>
            ) : (
              <span className="line-through">- {toReadList.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToReadListModal;
