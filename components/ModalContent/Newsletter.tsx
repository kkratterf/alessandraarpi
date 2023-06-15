// Import core
// Import third parts
// Import customs
import SubstackWidget from "../SubstackWidget";

function NewsletterModal() {
  return (
    <div className="text-2xl cursor-default overflow-y-scroll h-56 font-bold m-4 text-black">
      <SubstackWidget />
    </div>
  );
}

export default NewsletterModal;
