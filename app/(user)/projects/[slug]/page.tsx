// Import core
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
// Import customs
import { Projects } from '../../../../typings';
import Article from '../../../../components/Article';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 6000;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='project']
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
    *[_type=='project' && slug.current == $slug][0]
    {
        ...,
        client->,
        category->,
        team->
    }
  `;

  const project: Projects = await client.fetch(query, { slug });

  return (
    <>
      <Article category={project.title} title={project.title} image={project.image} body={project.body} />
    </>
  );
}

export default ProjectPage;
