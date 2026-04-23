import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useDocumentHead } from "@/hooks/use-document-head";

const TALLY_URL = "https://tally.so/placeholder";

type Project = {
  label: string;
  niche: string;
  name: string;
  description: string;
  image: string;
  comingSoon?: boolean;
  objectFit?: "cover" | "contain";
  link?: string;
};

const projects: Project[] = [
  {
    label: "Concept Demo",
    niche: "Healthcare",
    name: "Modern Psychology Practice",
    description:
      "Built around one goal: filling a therapist’s calendar. Includes a structured booking flow, automated email follow-ups after the free roadmap, session reminders, and a calm design that builds trust before the first appointment.",
    image:
      "/therapist.jpg",
    link: "https://session-harmony-pro.vercel.app/",
  },
  {
    label: "Concept Demo",
    niche: "Healthcare",
    name: "Luxury Dental Clinic",
    description:
      "A high-end dental experience designed to showcase results, build trust, and turn visitors into booked consultations.",
    image:
      "/dentist.jpg",
    link: "https://bespoke-smile.vercel.app/",
  },
  {
    label: "Concept Demo, Coming Soon",
    niche: "Healthcare",
    name: "Chiropractic Clinic",
    description:
      "Currently in development. A conversion-focused site for chiropractors built around appointment volume and local search visibility.",
    image:
      "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=1200&q=80&auto=format&fit=crop",
    comingSoon: true,
  },
  {
    label: "Lead Generation Demo, Coming Soon",
    niche: "Home Services",
    name: "Roofing Lead Generation",
    description:
      "A lead gen site built to rank locally and capture roofing inquiries. Leads are routed directly to a business client on a monthly rental model.",
    image:
      "https://images.unsplash.com/photo-1632759145355-8b8f0dd5c84a?w=1200&q=80&auto=format&fit=crop",
    comingSoon: true,
  },
];

export default function Work() {
  useDocumentHead({
    title: "Work — YK Digitals",
    description:
      "Selected websites and automation builds. A mix of concept demos and real client work, labeled honestly.",
    ogTitle: "Work — YK Digitals",
    ogDescription: "Selected websites and automation builds. Concept demos and client work.",
  });

  return (
    <SiteLayout>
      {/* Page header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="max-w-4xl font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Websites and systems built for clarity and conversion.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            A mix of concept demos and real client work. Each project is labeled honestly so you
            know what you are looking at.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-x-10">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col ${p.comingSoon ? "opacity-80" : ""}`}
              >
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border"
                  style={{ borderColor: p.comingSoon ? "#D9BB9E" : "#E5E5E5" }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className={`h-full w-full ${p.objectFit === "contain" ? "object-contain object-center" : "object-cover"}`}
                  />
                  {p.comingSoon && (
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ backgroundColor: "rgba(217, 187, 158, 0.18)" }}
                    />
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className="rounded-full border px-2.5 py-1 font-medium"
                    style={
                      p.comingSoon
                        ? { borderColor: "#D9BB9E", color: "#8a6d4d", backgroundColor: "#faf3ea" }
                        : { borderColor: "#C9A87C", color: "#111111" }
                    }
                  >
                    {p.label}
                  </span>
                  <span className="text-muted-foreground">{p.niche}</span>
                </div>

                <h2 className="mt-4 font-serif text-3xl font-medium text-foreground">{p.name}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                {p.comingSoon ? (
                  <span
                    className="mt-5 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
                    style={{ backgroundColor: "#D9BB9E33", color: "#8a6d4d" }}
                  >
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={p.link || "#"}
                    target={p.link ? "_blank" : undefined}
                    rel={p.link ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                    style={{ color: "#C9A87C" }}
                  >
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark banner */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        {/* Full-width sweeping gold gradient */}
        <style>{`
          @keyframes goldSweep {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
        `}</style>
        <div 
          className="absolute top-0 left-0 h-full pointer-events-none" 
          style={{ 
            width: '200%',
            background: 'linear-gradient(90deg, rgba(201,168,124,0) 0%, rgba(201,168,124,0.2) 25%, rgba(201,168,124,0) 50%, rgba(201,168,124,0.2) 75%, rgba(201,168,124,0) 100%)',
            animation: 'goldSweep 15s linear infinite',
            willChange: 'transform'
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Every project is built around one goal, getting your business results.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-col items-start md:flex-row md:items-center justify-between text-left gap-8">
            <h2 className="max-w-2xl font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl leading-[1.2] sm:leading-[1.15]">
              Something catching your eye? <span style={{ color: "#C9A87C" }}>Let's build it.</span>
            </h2>
            <div className="shrink-0">
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md px-7 text-sm font-medium transition-colors"
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
    </SiteLayout>
  );
}
