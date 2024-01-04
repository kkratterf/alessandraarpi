// Import core
// Import customs
import NewsletterContent from './NewsletterContent';

export const revalidate = 6000;

export default async function NewsletterPage() {
  return <NewsletterContent />;
}
