'use client';

// Import core
// Import third parts
import NextImage from 'next/image';
// Import customs
import { Projects } from '../../typings';
import urlFor from '../../lib/urlFor';

type ProjectsModalProps = {
  projects: Projects[];
  openFunction: (selectedProject: Projects) => void;
};

function ProjectsModal({ projects, openFunction }: ProjectsModalProps) {
  const handleProjectClick = (selectedProject: Projects) => {
    openFunction(selectedProject);
  };

  return (
    <div className="text-xl grid grid-cols-4 gap-3 cursor-default overflow-y-scroll m-4 text-black">
      {projects.map((project) => (
        <>
          <div
            onDoubleClick={() => handleProjectClick(project)}
            key={project._id}
            className="relative w-full aspect-w-1 h-56 rounded-md overflow-hidden safari_fix cursor-pointer"
          >
            <NextImage
              className="object-center object-cover hover:scale-105 transition duration-500 rounded-md"
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              fill
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default ProjectsModal;
