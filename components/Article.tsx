"use client"

// Import core
// Import third parts
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { PortableText } from "@portabletext/react";
// Import customs
import { RichTextComponents } from "../components/RichTextComponents";
import urlFor from '../lib/urlFor';
import { Block } from '../typings';

type ArticleProps = {
  category: string;
  title: string;
  image: StaticImageData;
  body: Block[];
};

function Article({ category, title, image, body }: ArticleProps) {

  return (
      <article>
        <section className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <h6 className="text-base sm:text-xl font-medium">
              {category}
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl">{title}</h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden">
            <Image
              src={urlFor(image).url()}
              className="object-center object-cover rounded-xl"
              alt="Federico Kratter Thaler"
              fill
            />
          </div>
        </section>
        <section className="mt-20 sm:mt-40">
          <PortableText value={body} components={RichTextComponents} />
        </section>
      </article>
  );
}

export default Article