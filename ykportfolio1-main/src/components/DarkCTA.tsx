import { Link } from "react-router-dom";

const TALLY_URL = "https://tally.so/r/q4E799";

export function DarkCTA({
  heading = "Ready to build something that actually works for your business?",
  subtext = "Tell me a bit about what you’re looking to build. It takes about 2 minutes, and I’ll review your answers and get back to you with the next steps.",
  children
}: {
  heading?: string;
  subtext?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[#FAF9F6] pt-10 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[85%] max-w-[1600px]">
        <div 
          className="relative overflow-hidden rounded-[2.5rem] px-6 pt-12 pb-12 sm:px-16 sm:pt-16 sm:pb-12 text-center shadow-2xl flex flex-col items-center min-h-[500px]"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Subtle Background Texture (Dotted pattern) */}
          <div 
            className="absolute inset-0 opacity-[0.22]" 
            style={{ 
              backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', 
              backgroundSize: '36px 36px',
              backgroundPosition: '0 0'
            }}
          />
          {/* Top Gradient for subtle lighting */}
          <div 
            className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[100px] pointer-events-none"
            style={{ backgroundColor: "#C9A87C" }}
          />

          {/* Main CTA Content */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase rounded-full px-4 py-1.5 border mb-6" style={{ color: "#C9A87C", borderColor: "rgba(201, 168, 124, 0.3)" }}>
              Start Your Project
            </span>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl text-center">
              {heading}
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/70 max-w-2xl text-center font-light">
              {subtext}
            </p>
            
            <div className="mt-10">
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[60px] items-center justify-center rounded-full px-12 text-[17px] font-semibold tracking-wide transition-all hover:scale-105 shadow-xl"
                style={{ 
                  backgroundColor: "#C9A87C", 
                  color: "#111111",
                  boxShadow: "0 10px 25px -5px rgba(201, 168, 124, 0.15)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
              >
                Start a Project
              </a>
            </div>

            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </div>

          {/* Footer inside the Dark Container */}
          <div className="relative z-10 w-full mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xl font-serif font-medium text-white tracking-wide">YK Digital<span style={{ color: "#C9A87C" }}>s</span></span>
              <span className="text-sm text-white/50 mt-1">Websites and Automation for Small Businesses.</span>
            </div>
            <div className="flex items-center gap-8">
              <Link to="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Text (Outside container) */}
        <div className="w-full mt-6 px-4">
          <p className="text-xs text-[#555555] font-medium text-center md:text-left">
            © 2026 YK Digitals. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
