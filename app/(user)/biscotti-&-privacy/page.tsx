// Import core
// Import customs
import CookiesContent from './CookiesContent';

export const revalidate = 6000;

export default async function CookiesPage() {
  return <CookiesContent />;
}