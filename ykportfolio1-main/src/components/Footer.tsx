import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111" }} className="text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:items-center">
        {/* Left: Brand */}
        <div>
          <Link to="/" className="font-serif text-2xl tracking-tight text-white">
            YK Digital<span style={{ color: "#C9A87C" }}>s</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm" style={{ color: "#CCCCCC" }}>
            Websites and automation for small businesses that want real results.
          </p>
        </div>

        {/* Center: Nav */}
        <nav className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 md:justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs uppercase tracking-[0.2em] transition-colors hover:text-white"
              style={{ color: "#CCCCCC" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: contact + socials */}
        <div className="flex flex-col items-start gap-4 md:items-end">
          <a
            href="mailto:info@ykdigitals.ca"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "#CCCCCC" }}
          >
            info@ykdigitals.ca
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 transition-colors hover:border-[#C9A87C] hover:text-[#C9A87C]"
              style={{ color: "#CCCCCC" }}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 transition-colors hover:border-[#C9A87C] hover:text-[#C9A87C]"
              style={{ color: "#CCCCCC" }}
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #D9BB9E33" }}>
        <div className="mx-auto max-w-6xl px-6 py-5 text-center">
          <p className="text-xs" style={{ color: "#CCCCCC" }}>
            2026 YK Digitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
