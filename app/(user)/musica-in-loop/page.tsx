// Import core
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// Import customs
import MusicList from './MusicList';

export const revalidate = 6000;

const query_musicList = groq`
  *[_type=='musicList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

export default async function MusicListPage() {
  const musicList = await client.fetch(query_musicList);
  return (
    <>
      <MusicList musicList={musicList} />
    </>
  );
}
