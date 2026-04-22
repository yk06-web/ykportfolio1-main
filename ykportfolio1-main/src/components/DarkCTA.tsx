import { Check } from "lucide-react";

const TALLY_URL = "https://tally.so/placeholder";

export function DarkCTA({
  heading = "Ready to build something that actually works for your business?",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div 
          className="rounded-[2rem] px-8 py-16 sm:p-20 text-left shadow-2xl"
          style={{ backgroundColor: "#111111" }}
        >
          <h2 className="max-w-3xl font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Tell me a bit about what you’re looking to build. It takes about 2 minutes, and I’ll review your answers and get back to you with the next steps.
          </p>
          
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-white/90">
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-base font-medium">Quick and straightforward</span>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-base font-medium">Tailored to your needs</span>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-base font-medium">Clear next steps after submission</span>
            </li>
          </ul>

          <div className="mt-12">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold tracking-wide transition-colors"
              style={{ backgroundColor: "#C9A87C", color: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
