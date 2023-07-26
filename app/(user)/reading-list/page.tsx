// Import core
import React from 'react';
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// Import customs

export const revalidate = 6000;

const query_projects = groq`
  *[_type=='projects' && visible == true ] {
    ...,
  } | order(order asc)
`;

export default async function LibraryPage() {

  const projects = await client.fetch(query_projects);
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
  
}
