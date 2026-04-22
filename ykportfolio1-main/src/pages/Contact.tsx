import { SiteLayout } from "@/components/SiteLayout";
import { useDocumentHead } from "@/hooks/use-document-head";

const TALLY_URL = "https://tally.so/placeholder";

export default function Contact() {
  useDocumentHead({
    title: "Contact — YK Digitals",
    description:
      "Describe your project and get a clear plan and honest price, usually within one business day.",
    ogTitle: "Contact — YK Digitals",
    ogDescription: "Describe your project and get a clear plan and honest price.",
  });

  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-32 text-center sm:py-40">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Let's build something <span style={{ color: "#C9A87C" }}>worth having.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base" style={{ color: "#555555" }}>
            Describe your project and I will come back with a clear plan and honest price, usually
            within one business day.
          </p>

          <div className="mt-10">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "#C9A87C", color: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
            >
              Start a Project
            </a>
          </div>

          <p className="mt-6 text-sm" style={{ color: "#888888" }}>
            Prefer email?{" "}
            <a
              href="mailto:hello@ykdigitals.ca"
              className="underline-offset-4 hover:underline"
              style={{ color: "#888888" }}
            >
              hello@ykdigitals.ca
            </a>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
