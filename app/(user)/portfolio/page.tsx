// Import core
import React from 'react';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from './PreviewSuspence';
// Import customs
import PreviewProjectList from './PreviewProjectList';
import ProjectList from './ProjectList';

export const revalidate = 6000;

const query_projects = groq`
  *[_type=='projects' && visible == true ] {
    ...,
  } | order(order asc)
`;

export default async function LibraryPage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center font-mono text-lg animate-pulse text-brand">
              All good things take time...
            </p>
          </div>
        }
      >
        <PreviewProjectList query={query_projects} />
      </PreviewSuspense>
    );
  }

  const projects = await client.fetch(query_projects);
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}
