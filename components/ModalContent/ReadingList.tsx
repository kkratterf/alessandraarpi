// Import core
// Import third parts
// Import customs
import { ReadingList } from '../../typings';

type ReadingListModalProps = {
  readingList: ReadingList[];
};

function ReadingListModal({ readingList }: ReadingListModalProps) {
  return (
    <div className="relative z-40 text-base cursor-default overflow-y-scroll max-h-[50vh] p-6 text-black">
      <ul>
        {readingList.map((readingList) => (
          <li key={readingList._id} className="text-black pb-1 italic">
            {!readingList.strike ? (
              <span> - {readingList.title}</span>
            ) : (
              <span className="line-through">- {readingList.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadingListModal;
