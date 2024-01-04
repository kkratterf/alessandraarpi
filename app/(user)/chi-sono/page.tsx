// Import core
// Import customs
import ContentAbout from './ContentAbout';

export const revalidate = 6000;

export default async function AboutPage() {
  return (
    <ContentAbout/>
  );
}
