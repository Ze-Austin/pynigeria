import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Consistent page layout wrapper.
 * Wraps all public-facing pages with Navbar + Footer.
 */
export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
