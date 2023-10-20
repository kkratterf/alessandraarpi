'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
import NextImage from 'next/image';
// Import customs
import urlFor from '../../../lib/urlFor';
import { Projects } from '../../../typings';
import ClientSideRoute from '../../../components/ClientSideRoute';
import PageContainer from '../../../components/PageContainer';

type Props = {
  projects: Projects[];
};

function ProjectList({ projects }: Props) {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">Portfolio</h1>
        <div className="relative grid sm:grid-cols-2 gap-4 z-40 text-lg cursor-default  text-black">
          {projects.map((project) => (
            <div key={project._id} className="hover:cursor-pointer">
              <ClientSideRoute route={`/projects/${project.slug.current}`}>
                <div className="relative w-full aspect-w-1 h-64 rounded-md overflow-hidden safari_fix cursor-pointer">
                  <NextImage
                    className="object-center object-cover hover:scale-105 transition duration-300 rounded-md"
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    fill
                  />
                </div>
                <div className="grid mx-2 mt-4 mb-4 space-y-2">
                  <h5 className="text-black text-xl font-bold hover:cursor-pointer">
                    {project.title}
                  </h5>
                  <p className="text-black-light1 text-sm hover:cursor-pointer">
                    {project.category}
                  </p>
                </div>
              </ClientSideRoute>
            </div>
          ))}
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default ProjectList;
