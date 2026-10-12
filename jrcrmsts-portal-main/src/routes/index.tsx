import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  DraftingCompass,
  Landmark,
  Map,
  HardHat,
  Calculator,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import heroPoster from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JRCRMSTS Enterprises — Architecture & Project Management Consultants" },
      {
        name: "description",
        content:
          "JRCRMSTS Enterprises & Project Management Consultant — architecture, interiors, structures, town planning, construction and project costing. Offices in Bahadurgarh & Hisar, Haryana.",
      },
      { property: "og:title", content: "JRCRMSTS Enterprises — Architecture & Project Management Consultants" },
      {
        property: "og:description",
        content:
          "Architecture, interiors, structures, town planning, construction and project costing — Bahadurgarh & Hisar, Haryana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: DraftingCompass,
    title: "Architecture",
    description:
      "Designing and detailing buildings — presentation drawings, working drawings and tender drawings.",
  },
  {
    icon: Building2,
    title: "Interiors",
    description: "Designing and detailing interiors of the given spaces, tailored to how you live and work.",
  },
  {
    icon: Landmark,
    title: "Structures",
    description: "Structural design and detailing of designed buildings, engineered for safety and longevity.",
  },
  {
    icon: Map,
    title: "Town Planning",
    description: "Designing layout plans for larger sites — organised, compliant and future-ready.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "End-to-end execution and on-site supervision for residential, commercial, industrial and institutional buildings.",
  },
  {
    icon: Calculator,
    title: "Project Estimate & Costing",
    description: "Transparent project estimates and costing so every rupee is accounted for before work begins.",
  },
];

const sectors = ["Residential", "Commercial", "Industrial", "Institutional"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-wide">
            JRCRMSTS <span className="text-primary">Enterprises</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">What we do</a>
            <a href="#about" className="transition-colors hover:text-foreground">Who we are</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-video.mp4"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Architecture · Interiors · Construction
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl md:text-7xl">
            We design and build spaces that last.
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg text-muted-foreground">
            JRCRMSTS Enterprises &amp; Project Management Consultant — architectural and
            construction services from Bahadurgarh &amp; Hisar, Haryana.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">What we do</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-balance md:text-5xl">
          Complete design &amp; build services under one roof
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-8 transition-colors hover:bg-secondary"
            >
              <service.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Who we are</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl">
              Technical excellence, honest hard work
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              JRCRMSTS Enterprises is dedicated to providing the best architectural and related
              services, tailored to meet the needs of each client. It is our sincere belief that
              technical excellence and hard work form a solid foundation for a successful firm and
              long-lasting relationships.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We provide construction design &amp; supervision services — architecture, interiors
              and execution — along with architectural support services including drafting,
              presentations and 3D walkthroughs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={studioImg}
              alt="Architectural drawings and drafting at JRCRMSTS Enterprises"
              className="h-full w-full rounded-md object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-5 py-3 backdrop-blur-sm">
              <p className="font-display text-2xl font-semibold text-primary">2</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Offices — Bahadurgarh &amp; Hisar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">What we are</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-balance md:text-5xl">
          Let's talk about your project
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-8">
            <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-semibold">Branch Office — Bahadurgarh</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              23A, Sector-7 Market, Bahadurgarh,
              <br />
              Distt. Jhajjar, Haryana — 124507
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-8">
            <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-semibold">Head Office — Hisar</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              97A, Block-J, Model Town Extension,
              <br />
              Hisar, Haryana — 125005, India
            </p>
          </div>
          <a
            href="tel:+919416779890"
            className="rounded-md border border-border bg-card p-8 transition-colors hover:bg-secondary"
          >
            <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-semibold">Call us</h3>
            <p className="mt-2 text-sm text-muted-foreground">94167-79890 · 96714-42711</p>
          </a>
          <a
            href="mailto:jrcrmstsenterprises@gmail.com"
            className="rounded-md border border-border bg-card p-8 transition-colors hover:bg-secondary"
          >
            <Mail className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-semibold">Email us</h3>
            <p className="mt-2 break-all text-sm text-muted-foreground">
              jrcrmstsenterprises@gmail.com
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <p className="font-display font-semibold text-foreground">
            JRCRMSTS <span className="text-primary">Enterprises</span>
          </p>
          <p>Architecture &amp; Project Management Consultant — Bahadurgarh &amp; Hisar, Haryana</p>
        </div>
      </footer>
    </div>
  );
}
