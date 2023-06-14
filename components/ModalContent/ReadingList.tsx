// Import core
// Import third parts
// Import customs
import { ReadingList } from '../../typings';

type ReadingListModalProps = {
  readingList: ReadingList[];
};

function ReadingListModal({ readingList }: ReadingListModalProps) {
  return (
    <div className="text-xl cursor-default overflow-y-scroll h-56 m-4 text-black">
      <p className="text-black">Tutte in contemporanea, ovviamente.</p>
      <ul>
        {readingList.map((readingList) => (
          <li key={readingList._id} className="text-black">
            {!readingList.strike ? (
              <span> - {readingList.title}</span>
            ) : (
              <span className="line-through">- {readingList.title}</span>
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

export default ReadingListModal;
