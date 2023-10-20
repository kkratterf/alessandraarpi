'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import PageContainer from '../../../components/PageContainer';
import { ToReadList } from '../../../typings';

type ToReadListProps = {
  toReadList: ToReadList[];
};

function ToReadList({ toReadList }: ToReadListProps) {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className='font-bold text-4xl pb-6'>Leggerò</h1>
        <div className="relative z-40 text-lg cursor-default space-y-4 text-black">
          <ul>
            {toReadList.map((item) => (
              <li key={item._id} className="text-black pb-1 italic">
                {!item.strike ? (
                  <span> - {item.title}</span>
                ) : (
                  <span className="line-through">- {item.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default ToReadList;