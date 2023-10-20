// Import core
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
// Import customs
import { Projects } from '../../../../typings';
import ProjectContent from './ProjectContent';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 6000;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='projects']
  {
    slug
  }
  `;

  const slugs: Projects[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function ProjectPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='projects' && slug.current == $slug][0]
    {
        ...,
        client->,
        team->
    }
  `;

  const project: Projects = await client.fetch(query, { slug });

  return (
    <>
      <ProjectContent
        image={project.mainImage}
        title={project.title}
        category={project.category}
        body={project.body}
      />
    </>
  );
}

export default ProjectPage;
