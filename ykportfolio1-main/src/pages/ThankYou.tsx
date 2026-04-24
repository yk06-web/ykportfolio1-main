import { SiteLayout } from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { useDocumentHead } from "@/hooks/use-document-head";

export default function ThankYou() {
  useDocumentHead({
    title: "Thank You — YK Digitals",
    description: "Thank you. I’ll take a look shortly.",
  });

  return (
    <SiteLayout>
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-background pb-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-6 pt-20 pb-16 text-center sm:pt-24 sm:pb-20">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground leading-[1.1] sm:text-5xl md:text-6xl sm:leading-[1.1] md:leading-[1.1]">
            Thank you. I’ll take a look shortly.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#555555]">
            I’ll review your answers and get back to you with a clear next step.
          </p>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex h-14 items-center justify-center rounded-md px-10 text-sm font-medium transition-colors"
              style={{ backgroundColor: "#C9A87C", color: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89669")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A87C")}
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
