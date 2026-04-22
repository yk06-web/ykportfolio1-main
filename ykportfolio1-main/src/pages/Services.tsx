import { Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { useDocumentHead } from "@/hooks/use-document-head";

const TALLY_URL = "https://tally.so/placeholder";

const mainServices = [
  {
    name: "Website Build",
    price: "from $500",
    body: "A site built around your business goals, your customers, and one clear outcome. Not a template, something that actually represents what you do.",
    items: [
      "Custom design",
      "Up to 6 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Launch and 7-day support",
    ],
  },
  {
    name: "Website Redesign",
    price: "from $400",
    body: "Your existing site rebuilt from the ground up. Better structure, better copy direction, better conversion, without starting your online presence from scratch.",
    items: [
      "Site structure and copy direction",
      "Visual redesign of all key pages",
      "Conversion focused layouts",
      "Migration and launch",
      "13-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Website + Automation",
    price: "from $900",
    body: "A complete package. A site that brings people in and a system that follows up, confirms, and nurtures them automatically.",
    items: [
      "Everything in Website Build",
      "Lead capture and routing",
      "Instant automated responses",
      "Multi-step follow-ups",
      "CRM or calendar integration",
      "Optional monthly maintenance",
    ],
  },
];

const automations = [
  {
    name: "Confirmation Emails",
    price: "$300 to $500",
    body: "Every inquiry instantly triggers a professional confirmation so leads never feel ignored.",
  },
  {
    name: "Automated Follow-ups",
    price: "$400 to $700",
    body: "Timed sequences that follow up with leads who have not responded so potential customers do not fall through the cracks.",
  },
  {
    name: "24/7 Customer Support Chat Agent",
    price: "$600 to $1,200",
    body: "An AI-powered chat agent on your website that answers questions, qualifies leads, and captures contact info around the clock.",
  },
  {
    name: "Appointment Setting Agent",
    price: "$500 to $1,000",
    body: "An intelligent agent that handles scheduling conversations and books appointments without you being involved.",
  },
  {
    name: "Monthly Maintenance and Hosting",
    price: "$65 to $100 per month",
    body: "Your site stays fast, secure, and up to date. Small edits included.",
  },
  {
    name: "Automation Monitoring",
    price: "$80 to $120 per month",
    body: "Your automations stay running, tested, and updated. If something breaks it gets fixed before you notice.",
  },
];

export default function Services() {
  useDocumentHead({
    title: "Services & Pricing — YK Digitals",
    description:
      "Website builds, redesigns, and automation systems. Clear scope, honest pricing, and standalone automation services available.",
    ogTitle: "Services & Pricing — YK Digitals",
    ogDescription: "Website builds, redesigns, and automation. Clear scope and honest pricing.",
  });

  return (
    <SiteLayout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="max-w-4xl font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Clear scope. Honest pricing.{" "}
            <span style={{ color: "#C9A87C" }}>Pick what you actually need.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Every project is quoted individually based on what you actually need. Start a Project
            and you will have a clear number before anything moves forward, no surprises.
          </p>
        </div>
      </section>

      {/* Main services */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {mainServices.map((s) => (
              <div
                key={s.name}
                className="flex flex-col rounded-lg border bg-card p-8"
                style={
                  s.featured
                    ? { borderColor: "#C9A87C", borderWidth: 1 }
                    : { borderColor: "#E5E5E5" }
                }
              >
                <h2 className="font-serif text-2xl text-foreground">{s.name}</h2>
                <p className="mt-2 text-base font-medium" style={{ color: "#C9A87C" }}>
                  {s.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

                <ul className="mt-6 space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#C9A87C" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-medium transition-colors"
                    style={
                      s.featured
                        ? { backgroundColor: "#C9A87C", color: "#111111" }
                        : { backgroundColor: "#111111", color: "#FFFFFF" }
                    }
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Only */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Automation Only
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Already have a site? Add the systems that keep your pipeline moving.
          </p>

          <div className="mt-10">
            {automations.map((a, i) => (
              <div
                key={a.name}
                className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:items-start"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid #D9BB9E",
                }}
              >
                <div className="md:col-span-5">
                  <h3 className="font-serif text-xl text-foreground">{a.name}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-sm font-medium" style={{ color: "#C9A87C" }}>
                    {a.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs" style={{ color: "#D9BB9E" }}>
            All prices in CAD. Final pricing is based on your specific project and confirmed before
            anything begins.
          </p>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#FAF7F3" }} className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How we work together.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Understand",
                d: "You share what your business does, who it is for, and what you want it to achieve. A short form handles everything, no back and forth needed.",
              },
              {
                n: "02",
                t: "Build",
                d: "I design and build the site and automation systems you need, then handle everything technical so you do not have to think about it.",
              },
              {
                n: "03",
                t: "Launch and Optimize",
                d: "We launch, measure what is working, and refine based on real data, not assumptions.",
              },
            ].map((step) => (
              <div key={step.n}>
                <p className="text-sm font-medium tracking-widest" style={{ color: "#C9A87C" }}>
                  {step.n}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
