import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { DarkCTA } from "@/components/DarkCTA";
import { useDocumentHead } from "@/hooks/use-document-head";
import { User, Check } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const problemPoints = [
  "Outdated websites that do not reflect the business",
  "Low conversion rates from existing traffic",
  "Confusing user flow and unclear next steps",
  "Manual processes that eat hours every week",
];

const services = [
  {
    name: "New Websites",
    body: "Built around your business goals and your customers, not a template.",
  },
  {
    name: "Redesigns",
    body: "Your existing site rebuilt for better structure, better copy, and better conversion.",
  },
  {
    name: "Automation",
    body: "Systems that capture leads, follow up automatically, and keep your pipeline moving.",
  },
];

export default function Index() {
  useDocumentHead({
    title: "YK Digitals — Websites and Automation for Small Businesses",
    description:
      "Custom websites and automation systems built for small businesses that want real results, not just a good-looking page.",
    ogTitle: "YK Digitals — Websites and Automation for Small Businesses",
    ogDescription:
      "Custom websites and automation systems built for small businesses that want real results.",
  });

  return (
    <SiteLayout transparentHeader>
      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — PROBLEM */}
      <section style={{ background: "linear-gradient(to bottom, #FAF9F6, #FFFFFF)" }}>
        <motion.div 
          className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <p
              className="text-xs font-medium uppercase tracking-[0.25em]"
              style={{ color: "#C9A87C" }}
            >
              The Problem
            </p>
            <h2
              className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#111111" }}
            >
              Most business websites quietly lose customers every day.
            </h2>
          </motion.div>
          <div>
            <ul className="space-y-6">
              {problemPoints.map((point) => (
                <motion.li
                  variants={itemVariants}
                  key={point}
                  className="group flex items-start gap-4 transition-all duration-300"
                  style={{ color: "#555555" }}
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A87C]/10 transition-colors group-hover:bg-[#C9A87C]/20">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#C9A87C" }}
                    />
                  </div>
                  <span className="text-lg leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p variants={itemVariants} className="mt-10 text-lg leading-relaxed" style={{ color: "#111111" }}>
              The result: wasted ad spend, missed inquiries, and hours each week spent on work that
              should be automatic.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — TRUST STRIP */}
      <section className="border-y flex items-center justify-center" style={{ backgroundColor: "#F7F4EF", borderColor: "#E5E0D8" }}>
        <div className="w-full px-6 py-12 text-center">
          <a
            href="https://trustpilot.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 transition-opacity hover:opacity-80"
          >
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white" style={{ borderColor: "#F7F4EF" }}>
                <User className="h-5 w-5" style={{ color: "#C9A87C" }} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white" style={{ borderColor: "#F7F4EF" }}>
                <User className="h-5 w-5" style={{ color: "#C9A87C" }} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white" style={{ borderColor: "#F7F4EF" }}>
                <User className="h-5 w-5" style={{ color: "#C9A87C" }} />
              </div>
            </div>
            <span className="text-base font-medium tracking-wide" style={{ color: "#111111" }}>
              Just getting started — be one of the first &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* SECTION 3.5 — THE SOLUTION */}
      <section className="border-b" style={{ backgroundColor: "#FAF9F6", borderColor: "#E5E0D8" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-24">
          <p
            className="text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: "#C9A87C" }}
          >
            The Solution
          </p>
          <h2
            className="mt-5 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "#111111" }}
          >
            A system that actually grows your business.
          </h2>
          <div className="mt-10 mx-auto flex w-full max-w-lg flex-col gap-4 text-left">
            <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-sm border transition-shadow hover:shadow-md" style={{ borderColor: "#E5E0D8" }}>
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-lg font-medium tracking-wide" style={{ color: "#111111" }}>Capture every lead instantly.</span>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-sm border transition-shadow hover:shadow-md" style={{ borderColor: "#E5E0D8" }}>
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-lg font-medium tracking-wide" style={{ color: "#111111" }}>Follow up automatically 24/7.</span>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-sm border transition-shadow hover:shadow-md" style={{ borderColor: "#E5E0D8" }}>
              <Check className="h-5 w-5 shrink-0" style={{ color: "#C9A87C" }} />
              <span className="text-lg font-medium tracking-wide" style={{ color: "#111111" }}>Turn lost traffic into paying clients.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES SNAPSHOT */}
      <section id="services-snapshot" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.25em]"
              style={{ color: "#C9A87C" }}
            >
              What We Do
            </p>
            <h2
              className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#111111" }}
            >
              Three services. Pick what your business actually needs.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {services.map((s) => (
              <div key={s.name}>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A87C" }} />
                <h3
                  className="mt-5 font-serif text-2xl font-medium sm:text-3xl"
                  style={{ color: "#111111" }}
                >
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "#555555" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="text-sm font-medium underline-offset-4 hover:underline"
              style={{ color: "#C9A87C" }}
            >
              See full services and pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DARK CTA */}
      <DarkCTA />
    </SiteLayout>
  );
}
