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
  const iconStyle = 'icon-style-global lg:ml-96';
  const modalStyle = 'modal-style-global ml-80';
  const subModalStyle = 'submodal-style-global ml-80';

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
        iconStyle={iconStyle}
      />
      {isOpen && (
        <ModalBig
          closeFunction={closeModal}
          title={title}
          extension={extension}
          modalStyle={modalStyle}
        >
          <ProjectsModal projects={projects} openFunction={openSubModal} />
        </ModalBig>
      )}
      {isSubOpen && selectedProject && (
        <ModalExtraLarge
          closeFunction={closeSubModal}
          title={selectedProject.title}
          extension={extensionProject}
          subModalStyle={subModalStyle}
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
