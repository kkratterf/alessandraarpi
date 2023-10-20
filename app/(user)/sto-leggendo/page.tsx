// Import core
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// Import customs
import ReadingList from './ReadingList';

export const revalidate = 6000;

const query_readingList = groq`
  *[_type=='readingList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

export default async function ReadingListPage() {

  const readingList = await client.fetch(query_readingList);
  return (
    <>
      <ReadingList readingList={readingList} />
    </>
  );
}
