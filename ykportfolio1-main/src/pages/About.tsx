import { SiteLayout } from "@/components/SiteLayout";
import { useDocumentHead } from "@/hooks/use-document-head";

const TALLY_URL = "https://tally.so/placeholder";

export default function About() {
  useDocumentHead({
    title: "About — YK Digitals",
    description:
      "Yazeed K builds websites and automation systems for small businesses. Simple scope, honest work, full attention on every project.",
    ogTitle: "About — YK Digitals",
    ogDescription: "Yazeed K builds websites and automation systems for small businesses.",
    ogImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  });

  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Good work, done properly. <span style={{ color: "#C9A87C" }}>No runaround.</span>
          </h1>
          <p className="sr-only">About Yazeed K and YK Digitals.</p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-100 md:gap-16 lg:grid-cols-100">
            <div className="md:col-span-55" style={{ gridColumn: "span 55 / span 55" }}>
              <div className="space-y-6 text-base text-foreground" style={{ lineHeight: 1.8 }}>
                <p>
                  Hey, I am Yazeed. I build websites and automation systems for small businesses
                  that are tired of their online presence not doing enough.
                </p>
                <p>
                  I keep things simple. You tell me what your business needs, I build it properly,
                  and you walk away with something that actually works, not just something that
                  looks good in a screenshot.
                </p>
                <p>
                  I work with a small number of clients at a time so every project gets my full
                  attention. No handoffs, no outsourcing, no generic solutions. Just straightforward
                  work built around your specific situation.
                </p>
                <p>
                  Not sure what you need yet? That is completely fine. Start a Project and we will
                  figure it out together.
                </p>
              </div>

              <div className="mt-10">
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

            <div className="relative md:col-span-45" style={{ gridColumn: "span 45 / span 45" }}>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ border: "1px solid #C9A87C", borderRadius: 8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Workspace with laptop and analytics"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundColor: "rgba(217, 187, 158, 0.10)" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: 1, backgroundColor: "#D9BB9E" }} />
        </div>
        <div className="h-20" />
      </section>
    </SiteLayout>
  );
}
