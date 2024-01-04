// Import core
import React from 'react';
import { groq } from 'next-sanity';
// Import customs
import PhotosList from './PhotosList';
import { client } from '@/lib/sanity.client';

export const revalidate = 6000;

const query_photos = groq`
  *[_type=='photos' && visible == true ] {
    ...,
  } | order(order asc)
`;

export default async function PhotosPage() {
    const photos = await client.fetch(query_photos);
    return (
      <>
        <PhotosList photos={photos} />
      </>
    );
}




