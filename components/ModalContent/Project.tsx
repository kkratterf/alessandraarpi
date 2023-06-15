'use client';

// Import core
// Import third parts
import NextImage from 'next/image';
// Import customs
import { Block } from '../../typings';
import Article from '../Article';
import urlFor from '../../lib/urlFor';

type ProjectModalProps = {
  title: string;
  id: string;
  image: any;
  category: string;
  body: Block[];
};

function ProjectModal({ id, image, title, category, body }: ProjectModalProps) {
  return (
    <div className="text-xl cursor-default overflow-y-scroll m-4 h-96 text-black">
      <Article category={category} title={title} image={image} body={body} />
      <div
        key={id}
        className="relative w-full aspect-w-1 h-80 rounded-md overflow-hidden safari_fix cursor-pointer"
      >
        <h1 className='text-black'>{title}</h1>
        <NextImage
          className="object-center object-cover rounded-md"
          src={urlFor(image).url()}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export default ProjectModal;
