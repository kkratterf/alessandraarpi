'use client';

// Import core
import { motion } from 'framer-motion';
// Import customs
import { Block } from '@/typings';
import Article from '@/components/Article';
import PageContainer from '@/components/PageContainer';

type ProjectContentProps = {
  title: string;
  image: any;
  category: string;
  body: Block[];
};

function ProjectContent({ image, title, category, body }: ProjectContentProps) {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <Article category={category} title={title} image={image} body={body} />
      </PageContainer>
    </motion.section>
  );
}

export default ProjectContent;
