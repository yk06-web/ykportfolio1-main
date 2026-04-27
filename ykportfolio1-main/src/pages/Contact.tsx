import { SiteLayout } from "@/components/SiteLayout";
import { DarkCTA } from "@/components/DarkCTA";
import { useDocumentHead } from "@/hooks/use-document-head";

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
      <DarkCTA 
        heading="Let's build something that actually works."
        subtext="Tell me what you’re trying to do. It takes about 2 minutes, and I’ll come back with a clear plan and a straight answer, quickly."
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-white/90">
            Just a clear starting point.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            <span>No pressure</span>
            <span className="text-[#C9A87C] opacity-90">&bull;</span>
            <span>Clear pricing</span>
            <span className="text-[#C9A87C] opacity-90">&bull;</span>
            <span>Quick turnaround</span>
          </div>

          <p className="mt-12 text-sm text-white/80 font-medium">
            Prefer email?{" "}
            <a
              href="mailto:info@ykdigitals.ca"
              className="text-white underline-offset-4 hover:underline"
            >
              info@ykdigitals.ca
            </a>
          </p>
        </div>
      </DarkCTA>
    </SiteLayout>
  );
}
