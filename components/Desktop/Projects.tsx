'use client';

// Import core
import { useState } from 'react';
// Import customs
import { Projects } from '@/typings';
import IconDesktop from '@/components/IconDesktop';
import ModalExtraBig from '@/components/ModalStructure/ModalExtraBig';
import ProjectsModal from '@/components/ModalContent/Projects';
import ModalExtraLarge from '@/components/ModalStructure/ModalExtraLarge';
import ProjectModal from '@/components/ModalContent/Project';
import { delay_2 } from '@/lib/delayConstants';

const title_projects = 'portfolio';
const extension_projects = '.omg';
const extensionProject_projects = '.pro';
const iconStyle_projects = 'icon-style-global ml-[30vw] mt-[50vh]';
const modalStyle_projects = 'modal-style-global ml-[10vw] mt-[5vh]';
const subModalStyle_projects = 'submodal-style-global ml-[15vw] mt-[1vh]';

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
        delay={delay_2}
      />
      {isOpen && (
        <ModalExtraBig
          closeFunction={closeModal}
          title={title_projects}
          extension={extension_projects}
          modalStyle={modalStyle_projects}
        >
          <ProjectsModal projects={projects} openFunction={openSubModal} />
        </ModalExtraBig>
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
