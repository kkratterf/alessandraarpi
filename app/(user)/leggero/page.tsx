// Import core
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// Import customs
import ToReadList from './ToReadList';

export const revalidate = 6000;

const query_toReadList = groq`
  *[_type=='toReadList' && visible == true ] {
    ...,
  } | order(_createdAt asc)
`;

export default async function ToReadListPage() {
  const toReadList = await client.fetch(query_toReadList);
  return (
    <>
      <ToReadList toReadList={toReadList} />
    </>
  );
}
