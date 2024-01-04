'use client';

// Import core
import NextImage from 'next/image';
// Import customs
import { Projects } from '@/typings';
import urlFor from '@/lib/urlFor';

type ProjectsModalProps = {
  projects: Projects[];
  openFunction: (selectedProject: Projects) => void;
};

function ProjectsModal({ projects, openFunction }: ProjectsModalProps) {
  const handleProjectClick = (selectedProject: Projects) => {
    openFunction(selectedProject);
  };

  return (
    <div className="text-xl grid grid-cols-3 gap-3 cursor-default overflow-y-scroll h-[80vh] p-6 text-black">
      {projects.map((project) => (
        <div key={project._id} className="hover:cursor-pointer">
          <div
            onClick={() => handleProjectClick(project)}
            key={project._id}
            className="relative w-full aspect-w-1 h-64 rounded-md overflow-hidden safari_fix cursor-pointer"
          >
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
        </div>
      ))}
    </div>
  );
}

export default ProjectsModal;
