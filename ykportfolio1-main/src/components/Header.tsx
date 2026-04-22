import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const TALLY_URL = "https://tally.so/placeholder";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero is dark, so on the home page we want light text until scrolled
  const onDarkHero = pathname === "/" && !scrolled;
  const headerBg = scrolled ? "bg-[#111111]" : "bg-transparent";
  const textColor = scrolled || onDarkHero ? "text-white" : "text-[#111111]";
  const mutedText = scrolled || onDarkHero ? "text-white/70" : "text-[#111111]/70";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className={`font-serif text-xl tracking-tight ${textColor}`}
          onClick={() => setOpen(false)}
        >
          YK Digital<span style={{ color: "#C9A87C" }}>s</span>
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm tracking-wide transition-colors hover:opacity-100 ${
                  active ? textColor : mutedText
                }`}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute -bottom-1 left-0 h-px w-full"
                    style={{ backgroundColor: "#C9A87C" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors"
            style={{ backgroundColor: "#C9A87C", color: "#111111" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden ${textColor}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#111111] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-2 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md text-sm font-medium"
              style={{ backgroundColor: "#C9A87C", color: "#111111" }}
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
