import { ParticleNetwork } from "./ParticleNetwork";

const TALLY_URL = "https://tally.so/placeholder";

export function Hero() {
  function scrollToServices(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("services-snapshot");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}
    >
      <ParticleNetwork />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(13,13,13,0) 0%, rgba(13,13,13,0.5) 70%, rgba(13,13,13,0.85) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center sm:py-40 md:py-48">
        <h1
          className="yk-rise text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
        >
          <span className="block">
            Websites your business <span style={{ color: "#C9A87C" }}>deserves.</span>
          </span>
          <span className="mt-2 block">
            Automation that <span style={{ color: "#C9A87C" }}>saves</span> you time.
          </span>
        </h1>

        <p
          className="yk-rise-2 mt-8 max-w-[560px] text-base font-light leading-relaxed text-white/80 sm:text-lg"
        >
          Custom websites and automation systems built for small businesses that want real
          results, not just a good-looking page.
        </p>

        <div className="yk-rise-3 mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md px-7 text-sm font-medium tracking-wide transition-colors"
            style={{ backgroundColor: "#C9A87C", color: "#111111" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
          >
            Start a Project
          </a>
          <a
            href="#services-snapshot"
            onClick={scrollToServices}
            className="text-sm font-medium tracking-wide text-white underline-offset-4 hover:underline"
          >
            See What's Possible
          </a>
        </div>
      </div>
    </section>
  );
}
