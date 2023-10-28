// Import core
// Import third parts
import Link from "next/link";
// Import customs
import "../styles/font.css";
import "../styles/globals.css";

export default function Custom404() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-16 overflow-hidden flex items-stretch">
      <div className="flex items-center w-[100vw] h-[100vh]">
        <div className="space-y-6 sm:space-y-10 relative z-50">
          <h3 className="text-6xl sm:text-9xl font-bold">404</h3>
          <h4 className="text-2xl sm:text-4xl font-medium">
            La pagina non c’è, è triste ma è così.
            <br/>
            Torna sul mio desktop e
            <span className="ml-1 sm:ml-2 underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-300">
              <Link href="/">ricomincia da lì</Link>
            </span>
            .
          </h4>
        </div>
      </div>
    </div>
  );
}
