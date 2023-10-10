// Import core
// Import third parts
// Import customs
import { MusicList } from '../../typings';

type MusicListModalProps = {
  musicList: MusicList[];
};

function MusicModal({ musicList }: MusicListModalProps) {
  return (
    <div
      className="text-xl grid grid-cols-2 gap-3 cursor-default overflow-y-scroll p-6 text-black"
    >
      {musicList.map((musicList) => (
        <div key={musicList._id}>
          <iframe
            className="rounded-md"
            src={musicList.src}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default MusicModal;
