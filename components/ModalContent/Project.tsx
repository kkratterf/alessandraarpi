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
    <div className="text-xl cursor-default overflow-y-scroll m-4 h-128 text-black">
      <Article  category={category} title={title} image={image} body={body} />
    </div>
  );
}

export default ProjectModal;
