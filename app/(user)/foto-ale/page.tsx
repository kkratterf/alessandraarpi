// Import core
import React from 'react';
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// Import customs
import PhotosList from './PhotosList';

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




