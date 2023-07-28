'use client';

// Import core
import { useState } from 'react';
// Import third parts
// Import customs
import { Projects } from '../../typings';
import IconDesktop from '../IconDesktop';
import ModalBig from '../ModalStructure/ModalBig';
import ProjectsModal from '../ModalContent/Projects';
import ModalExtraLarge from '../ModalStructure/ModalExtraLarge';
import ProjectModal from '../ModalContent/Project';
import { delay_9 } from '../../lib/delayConstants';
import {
  title_projects,
  extension_projects,
  iconStyle_projects,
  modalStyle_projects,
  extensionProject_projects,
  subModalStyle_projects,
} from '../../lib/fileConstants';

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
        title={title_projects}
        extension={extension_projects}
        iconStyle={iconStyle_projects}
        delay={delay_9}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title_projects}
          extension={extension_projects}
          modalStyle={modalStyle_projects}
        >
          <ProjectsModal projects={projects} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedProject && (
        <ModalExtraLarge
          closeFunction={closeSubModal}
          title={selectedProject.title}
          extension={extensionProject_projects}
          subModalStyle={subModalStyle_projects}
        >
          <ProjectModal
            id={selectedProject._id}
            image={selectedProject.mainImage}
            title={selectedProject.title}
            category={selectedProject.category}
            body={selectedProject.body}
          />
        </ModalExtraLarge>
      )}
    </>
  );
};

export default ProjectsDesktop;
