import { SiteLayout } from "@/components/SiteLayout";
import { useDocumentHead } from "@/hooks/use-document-head";

const TALLY_URL = "https://tally.so/r/q4E799";

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
        
        <div 
          className="relative overflow-hidden border-b border-foreground/10 pt-24 pb-16 sm:pt-32 sm:pb-20"
          style={{ backgroundColor: "rgba(201, 168, 124, 0.05)" }}
        >
          {/* Decorative gradient glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C9A87C] opacity-20 blur-[80px] sm:-left-32 sm:-top-32 sm:h-96 sm:w-96 sm:blur-[100px]" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Good work, done properly.{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-foreground">No runaround.</span>
                <span 
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-1/2 -z-10"
                  style={{ backgroundColor: "rgba(201, 168, 124, 0.2)" }}
                />
              </span>
            </h1>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-none">
              Most small business websites don’t fail because they look bad — they fail because they don’t guide people to take action.
            </p>
            <div className="mt-12 h-px w-full max-w-2xl bg-foreground/10" />
            <p className="sr-only">About Yazeed K and YK Digitals.</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28">
          <div className="mt-20 mx-auto max-w-3xl">
            <div 
              className="rounded-3xl p-8 sm:p-10 md:p-12 border border-foreground/10 shadow-sm" 
              style={{ backgroundColor: "rgba(201, 168, 124, 0.03)" }}
            >
              <div className="space-y-16 text-lg text-foreground" style={{ lineHeight: 1.95 }}>
                
                <div className="space-y-8 max-w-2xl" style={{ lineHeight: 2.1 }}>
                  <p>Hey, I am Yazeed.</p>
                  <p>
                    I build websites and automation systems for small businesses that are tired of their online presence not doing enough. You tell me what you need, I handle everything, and you walk away with something that actually works.
                  </p>
                </div>

                <div className="h-px w-full bg-foreground/10" />

                <div>
                  <h2 className="mb-12 font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">How I work</h2>
                  <ul className="space-y-6 list-none pl-6 md:pl-8">
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>Clear, direct communication</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>Built around your actual business</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>Fast, focused execution</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>We keep things simple and easy</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px w-full bg-foreground/10" />

                <div>
                  <h2 className="mb-12 font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">If this sounds familiar</h2>
                  <ul className="space-y-6 list-none pl-6 md:pl-8">
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>Your website isn’t bringing in enough inquiries</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>You’re not sure what happens after someone reaches out</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>Things feel a bit all over the place</span>
                    </li>
                    <li className="flex items-start gap-5 transition-opacity duration-300 hover:opacity-70">
                      <span className="font-bold" style={{ color: "#C9A87C" }}>&mdash;</span>
                      <span>You know it could be working better</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px w-full bg-foreground/10" />

                <div className="space-y-8 pt-8">
                  <p className="text-muted-foreground text-xl">
                    Not sure what you need yet? That’s fine. We’ll figure it out together.
                  </p>
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
