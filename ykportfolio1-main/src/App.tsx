import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Header";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-medium text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
            style={{ backgroundColor: "#C9A87C", color: "#111111" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function SentryDebugTrigger() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-0 right-0 z-50 flex h-8 w-8 items-end justify-end p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute bottom-0 right-0 h-12 w-12 cursor-default" />
      {isHovered && (
        <button
          onClick={() => {
            throw new Error("Sentry Test Error");
          }}
          className="relative z-10 whitespace-nowrap rounded bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-red-700"
        >
          DEBUG_SENTRY_TRIGGER
        </button>
      )}
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => {
          // Disable smooth scroll temporarily so route changes jump instantly to top
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollTo(0, 0);
          // Restore smooth scroll for anchor links
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 0);
        }}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-1 flex-col"
        >
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {import.meta.env.DEV && <SentryDebugTrigger />}
    </div>
  );
}
