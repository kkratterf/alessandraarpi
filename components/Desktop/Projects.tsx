'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { Projects } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ProjectsModal from '../ModalContent/Projects';
import ModalSmall from '../ModalStructure/ModalSmall';
import ProjectModal from '../ModalContent/Project';

type ProjectsDesktopProps = {
  projects: Projects[];
};

const ProjectsDesktop = ({ projects }: ProjectsDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const title = 'projects';
  const extension = '.fol';
  const extensionProject = '.pro';
  const xDesktop = 400;
  const yDesktop = 70;
  const xModal = 500;
  const yModal = 50;
  const xSubModal = 600;
  const ySubModal = 200;

  const [isSubOpen, setIsSubOpen] = useState(false);
  function closeSubModal() {
    setIsSubOpen(false);
  }
  const openSubModal = (selectedProject: Projects) => {
    setSelectedProject(selectedProject);
    setIsSubOpen(true);
  };

  return (
    <>
      <IconDesktop
        openFunction={openModal}
        title={title}
        extension={extension}
        x={xDesktop}
        y={yDesktop}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          x={xModal}
          y={yModal}
        >
          <ProjectsModal projects={projects} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedProject && (
        <ModalSmall
          closeFunction={closeSubModal}
          title={selectedProject.title}
          extension={extensionProject}
          x={xSubModal}
          y={ySubModal}
        >
          <ProjectModal
            id={selectedProject._id}
            image={selectedProject.mainImage}
            title={selectedProject.title}
            category={selectedProject.category}
            body={selectedProject.body}
          />
        </ModalSmall>
      )}
    </>
  );
};

export default ProjectsDesktop;
