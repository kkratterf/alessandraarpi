'use client';

// Import core
// Import third parts
import NextImage from 'next/image';
import { motion } from "framer-motion";
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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
      },
    },
  }

  return (
    <motion.div
      className="text-xl grid grid-cols-3 gap-3 cursor-default overflow-y-scroll m-4 text-black"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project) => (
        <motion.div
          variants={item}
          key={project._id}
        >
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
          <div className="grid mx-2 mt-3 mb-4 space-y-1">
            <h5 className="text-black text-xl font-bold">{project.title}</h5>
            <p className="text-black text-sm">{project.category}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectsModal;
