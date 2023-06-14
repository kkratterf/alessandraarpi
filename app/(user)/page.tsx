// Import core
import React from 'react';
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
// Import customs
import AboutDesktop from '../../components/Desktop/About';
import ReadingListDesktop from '../../components/Desktop/ReadingList';
import ToReadListDesktop from '../../components/Desktop/ToReadList';
import MusicListDesktop from '../../components/Desktop/Music';
import PhotosDesktop from '../../components/Desktop/Photos';

export const revalidate = 6000;

const query_readingList = groq`
  *[_type=='readingList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_toReadList = groq`
  *[_type=='toReadList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_musicList = groq`
  *[_type=='musicList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

const query_photos = groq`
  *[_type=='photos' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

export default async function HomePage() {

  const readingList = await client.fetch(query_readingList);
  const toReadList = await client.fetch(query_toReadList);
  const musicList = await client.fetch(query_musicList);
  const photos = await client.fetch(query_photos);
  
  return (
    <div className="overscroll-none">
      <AboutDesktop />
      <ReadingListDesktop readingList={readingList} />
      <ToReadListDesktop toReadList={toReadList} />
      <MusicListDesktop musicList={musicList} />
      <PhotosDesktop photos={photos} />
    </div>
  );
}
