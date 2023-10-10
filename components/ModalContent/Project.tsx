'use client';

// Import core
// Import third parts
// Import customs
import { Block } from '../../typings';
import Article from '../Article';

type ProjectModalProps = {
  title: string;
  id: string;
  image: any;
  category: string;
  body: Block[];
};

function ProjectModal({ id, image, title, category, body }: ProjectModalProps) {
  return (
    <div className="relative z-40 text-xl cursor-default overflow-y-scroll h-[70vh] p-6 text-black">
      <Article category={category} title={title} image={image} body={body} />
    </div>
  );
}

export default ProjectModal;
