import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  DraftingCompass,
  Factory,
  House,
  Landmark,
  Map,
  HardHat,
  Calculator,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useRef, useState } from "react";
import heroPoster from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";

const firmName = "M/s JRCRMSTS Enterprises & Project Management Consultant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${firmName} — Architecture & Project Management Consultants` },
      {
        name: "description",
        content: `${firmName} — architecture, interiors, structures, town planning, construction and project costing. Offices in Bahadurgarh & Hisar, Haryana.`,
      },
      {
        property: "og:title",
        content: `${firmName} — Architecture & Project Management Consultants`,
      },
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
    description:
      "Designing and detailing interiors of the given spaces, tailored to how you live and work.",
  },
  {
    icon: Landmark,
    title: "Structures",
    description:
      "Structural design and detailing of designed buildings, engineered for safety and longevity.",
  },
  {
    icon: Map,
    title: "Town Planning",
    description: "Designing layout plans for larger sites — organised, compliant and future-ready.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "End-to-end execution and on-site supervision for residential, commercial, industrial and institutional buildings.",
  },
  {
    icon: Calculator,
    title: "Project Estimate & Costing",
    description:
      "Transparent project estimates and costing so every rupee is accounted for before work begins.",
  },
];

const galleryCategories = [
  {
    slug: "commercial",
    title: "Commercial",
    icon: Building2,
    image: "IMG-20261017-WA0009.jpg",
  },
  {
    slug: "residential",
    title: "Residential",
    icon: House,
    image: "IMG-20261019-WA0003.jpg",
  },
  {
    slug: "institutional",
    title: "Institutional",
    icon: Landmark,
    image: "IMG-20261019-WA0012.jpg",
  },
  {
    slug: "industrial",
    title: "Industrial",
    icon: Factory,
    image: "IMG-20261019-WA0026.jpg",
  },
  {
    slug: "design-drafting",
    title: "Design & Drafting",
    icon: DraftingCompass,
    image: "IMG-20261013-WA0006.jpg",
  },
];

const designDraftingPhotos = [
  "IMG-20261013-WA0004.jpg",
  "IMG-20261013-WA0005.jpg",
  "IMG-20261013-WA0006.jpg",
  "IMG-20261013-WA0007.jpg",
  "IMG-20261013-WA0008.jpg",
  "IMG-20261017-WA0008.jpg",
  "IMG-20261017-WA0010.jpg",
  "IMG-20261017-WA0012.jpg",
  "IMG-20261017-WA0018.jpg",
  "IMG-20261017-WA0021.jpg",
  "IMG-20261017-WA0025.jpg",
];

const institutionalPhotos = [
  "IMG-20261017-WA0023.jpg",
  "IMG-20261019-WA0001.jpg",
  "IMG-20261019-WA0012.jpg",
  "IMG-20261019-WA0017.jpg",
  "IMG-20261019-WA0019.jpg",
  "IMG-20261019-WA0020.jpg",
  "IMG-20261019-WA0023.jpg",
  "IMG-20261019-WA0024.jpg",
  "IMG-20261019-WA0027.jpg",
  "IMG-20261019-WA0029.jpg",
  "IMG-20261019-WA0030.jpg",
  "institutional-additional.jpg",
  "institutional-whatsapp-2026-10-23-233951.jpeg",
];

const residentialPhotos = [
  "IMG-20261019-WA0000.jpg",
  "IMG-20261019-WA0002.jpg",
  "IMG-20261019-WA0003.jpg",
  "IMG-20261019-WA0004.jpg",
  "IMG-20261019-WA0005.jpg",
  "IMG-20261019-WA0006.jpg",
  "IMG-20261019-WA0007.jpg",
  "IMG-20261019-WA0008.jpg",
  "IMG-20261019-WA0010.jpg",
  "IMG-20261019-WA0011.jpg",
  "IMG-20261019-WA0021.jpg",
  "IMG-20261019-WA0022.jpg",
  "IMG-20261019-WA0025.jpg",
  "residential-whatsapp-2026-10-23-233908.jpeg",
];

const commercialPhotos = [
  "IMG-20261017-WA0009.jpg",
  "IMG-20261019-WA0033.jpg",
  "IMG-20261017-WA0011.jpg",
  "IMG-20261017-WA0013.jpg",
  "IMG-20261017-WA0027.jpg",
  "IMG-20261017-WA0028.jpg",
  "IMG-20261017-WA0031.jpg",
  "IMG-20261019-WA0014.jpg",
  "IMG-20261019-WA0015.jpg",
  "IMG-20261019-WA0016.jpg",
  "IMG-20261019-WA0028.jpg",
];

const industrialPhotos = [
  "IMG-20261019-WA0026.jpg",
  "IMG-20261018-WA0005.jpg",
  "IMG-20261018-WA0006.jpg",
  "IMG-20261018-WA0008.jpg",
  "IMG-20261018-WA0009.jpg",
];

const sectors = galleryCategories;

const clients = [
  "AIIMS",
  "IOCL",
  "Royal Enfield",
  "Bhiwani Medical College",
  "Malbue Towne Farm House",
  "XLRI Delhi NCR Campus",
];

const clientHighlights = [
  {
    icon: Building2,
    value: "2,300+ SQFT",
    label: "AREA BUILT",
  },
  {
    icon: HardHat,
    value: "50,200+ SQFT",
    label: "UNDER CONSTRUCTION",
  },
  {
    icon: ShieldCheck,
    value: "120+",
    label: "CLIENTS",
  },
  {
    icon: UsersRound,
    value: "50+",
    label: "ENGINEERS AND STAFF",
  },
];

const offices = [
  {
    title: "Head Office — Hisar",
    address: ["97A, Block-J, Model Town Extension,", "Hisar, Haryana — 125005, India"],
  },
  {
    title: "Branch Office — Bahadurgarh",
    address: ["23A, Sector-7 Market, Bahadurgarh,", "Distt. Jhajjar, Haryana — 124507"],
  },
];

function Index() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const galleryTrack = useRef<HTMLDivElement>(null);
  const contactCardClass =
    "group rounded-md border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/60 hover:bg-secondary";

  const scrollGallery = (direction: -1 | 1) => {
    galleryTrack.current?.scrollBy({
      left: direction * galleryTrack.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="inline-flex items-center gap-1.5 sm:gap-2">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/70 bg-gradient-to-br from-primary/25 via-background/70 to-violet-950/50 p-1.5 shadow-[0_0_18px_rgba(219,169,83,0.32)] sm:h-14 sm:w-14">
              <img
                src="/brand-mark.png"
                alt=""
                className="h-9 w-10 object-contain brightness-150 drop-shadow-[0_0_5px_rgba(255,220,150,0.45)] sm:h-11 sm:w-12"
              />
            </span>
            <span className="flex flex-col font-display font-bold leading-tight tracking-normal">
              <span className="text-sm sm:text-xl">
                <span className="text-xs font-medium sm:text-sm">M/s </span>
                <span>JRCRMSTS</span> <span className="text-primary">Enterprises</span>
              </span>
              <span className="mt-0.5 text-[0.55rem] font-medium tracking-[0.04em] text-muted-foreground sm:text-[0.65rem]">
                &amp; Project Management Consultant
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About Us
            </a>
            <a href="#gallery" className="transition-colors hover:text-foreground">
              Gallery
            </a>
            <a href="#clients" className="transition-colors hover:text-foreground">
              Clients
            </a>
          </nav>
          <a
            href="#call-us"
            className="shrink-0 whitespace-nowrap rounded-sm bg-primary px-2.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
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
            {firmName} — architectural and construction services from Bahadurgarh &amp; Hisar,
            Haryana.
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
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Services</p>
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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">About Us</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl">
              Technical excellence, honest hard work
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              M/s JRCRMSTS Enterprises is dedicated to providing the best architectural and related
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
                <a
                  key={sector.slug}
                  href={`#gallery-category-${sector.slug}`}
                  onClick={() => setActiveGallery(sector.slug)}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {sector.title}
                </a>
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

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Gallery</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-balance md:text-5xl">
          Explore our projects
        </h2>
        <div className="mt-8 flex justify-end gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollGallery(-1)}
            aria-label="Show previous gallery categories"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollGallery(1)}
            aria-label="Show next gallery categories"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div
          ref={galleryTrack}
          className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 md:grid md:grid-cols-5 md:overflow-visible"
        >
          {galleryCategories.map((category) => (
            <button
              id={`gallery-category-${category.slug}`}
              key={category.slug}
              type="button"
              onClick={() =>
                setActiveGallery((current) => (current === category.slug ? null : category.slug))
              }
              aria-expanded={activeGallery === category.slug}
              className={`group relative flex min-h-52 w-[78%] shrink-0 snap-center flex-col items-start justify-between overflow-hidden rounded-md border p-5 text-left transition-all sm:w-[45%] md:min-h-56 md:w-auto lg:min-h-64 ${
                activeGallery === category.slug
                  ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(219,169,83,0.12)]"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              {category.image ? (
                <>
                  <img
                    src={`/gallery/${category.image}`}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10"
                  />
                  <span className="relative mt-auto font-display text-lg font-semibold text-white drop-shadow-md">
                    {category.title}
                  </span>
                  <span className="relative mt-2 text-xs text-white/85">
                    {activeGallery === category.slug ? "Viewing projects" : "View projects"}
                  </span>
                </>
              ) : (
                <>
                  <category.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <span className="mt-8 font-display text-lg font-semibold">{category.title}</span>
                  <span className="mt-2 text-xs text-muted-foreground">
                    {activeGallery === category.slug ? "Viewing projects" : "View projects"}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
        {activeGallery && (
          <div
            id="gallery-projects"
            className="mt-8 rounded-md border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-violet-950/10 p-6 sm:p-8"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {galleryCategories.find((category) => category.slug === activeGallery)?.title}
            </p>
            {activeGallery === "design-drafting" ||
            activeGallery === "institutional" ||
            activeGallery === "residential" ||
            activeGallery === "commercial" ||
            activeGallery === "industrial" ? (
              <>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {activeGallery === "design-drafting"
                    ? "Design & Drafting projects"
                    : `${activeGallery === "institutional" ? "Institutional" : activeGallery === "residential" ? "Residential" : activeGallery === "commercial" ? "Commercial" : "Industrial"} projects`}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Browse our{" "}
                  {activeGallery === "design-drafting"
                    ? "design and drafting"
                    : activeGallery === "institutional"
                      ? "institutional"
                      : activeGallery === "residential"
                        ? "residential"
                        : activeGallery === "commercial"
                          ? "commercial"
                          : "industrial"}{" "}
                  project photos.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(activeGallery === "design-drafting"
                    ? designDraftingPhotos
                    : activeGallery === "institutional"
                      ? institutionalPhotos
                      : activeGallery === "residential"
                        ? residentialPhotos
                        : activeGallery === "commercial"
                          ? commercialPhotos
                          : industrialPhotos
                  ).map((photo, index) => (
                    <figure
                      key={photo}
                      className="overflow-hidden rounded-md border border-border/80 bg-background/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_8px_30px_rgba(219,169,83,0.18)]"
                    >
                      <img
                        src={`/gallery/${photo}`}
                        alt={`${activeGallery === "design-drafting" ? "Design & Drafting" : activeGallery === "institutional" ? "Institutional" : activeGallery === "residential" ? "Residential" : activeGallery === "commercial" ? "Commercial" : "Industrial"} project ${index + 1}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full bg-background object-contain"
                      />
                    </figure>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Project photos coming soon
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Photos for this project category will appear here. The gallery is ready for your
                  images.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {["Project overview", "Design details", "Completed work"].map((label) => (
                    <div
                      key={label}
                      className="grid aspect-[4/3] place-items-center rounded-md border border-border/80 bg-background/50 p-4 text-center"
                    >
                      <div>
                        <DraftingCompass
                          className="mx-auto h-8 w-8 text-primary/70"
                          strokeWidth={1.5}
                        />
                        <p className="mt-3 text-sm font-medium text-muted-foreground">{label}</p>
                        <p className="mt-1 text-xs text-muted-foreground/70">Image will be added</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {/* Clients */}
      <section id="clients" className="border-y border-border bg-[#0a0a0b]">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            satisfaction.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {clientHighlights.map((stat) => (
              <div
                key={stat.label}
                className="relative flex min-h-[120px] flex-col justify-center overflow-hidden rounded-2xl border border-primary/40 bg-[radial-gradient(circle_at_top_left,_rgba(219,169,83,0.14),_transparent_35%),linear-gradient(180deg,_rgba(10,10,12,0.98)_0%,_rgba(16,16,18,0.96)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4"
              >
                <div className="mb-2 flex justify-center">
                  <div className="grid h-9 w-9 place-items-center rounded-full border border-primary/60 bg-primary/5 text-primary shadow-[0_0_22px_rgba(219,169,83,0.18)]">
                    <stat.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-display text-xl font-semibold tracking-[-0.05em] text-primary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.65rem]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-balance md:text-5xl">
          Let's talk about your project
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offices.map((office) => {
            const mapQuery = encodeURIComponent(office.address.join(" "));

            return (
              <div key={office.title} className={`${contactCardClass} h-64`}>
                <MapPin
                  className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {office.title}
                </h3>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="min-w-0 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {office.address.map((line, index) => (
                      <span key={line}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                  <div className="w-28 shrink-0 overflow-hidden rounded-md border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary to-violet-950/10 p-1 shadow-sm sm:w-32">
                    <iframe
                      title={`Map showing ${office.title}`}
                      src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                      className="h-20 w-full rounded-sm"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block px-1 py-1.5 text-center text-[10px] font-medium leading-tight text-primary transition-colors hover:text-foreground"
                    >
                      Open map
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          <a id="call-us" href="tel:+919416779890" className={`${contactCardClass} scroll-mt-28`}>
            <Phone
              className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <h3 className="mt-4 font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              Call us
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">94167-79890 · 96714-42711</p>
          </a>
          <a href="mailto:jrcrmstsenterprises@gmail.com" className={contactCardClass}>
            <Mail
              className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <h3 className="mt-4 font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              Email us
            </h3>
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
            <span className="text-xs font-medium">M/s </span>
            JRCRMSTS <span className="text-primary">Enterprises</span>
            <span className="mt-1 block text-xs font-normal text-muted-foreground">
              &amp; Project Management Consultant
            </span>
          </p>
          <p>Architecture — Bahadurgarh &amp; Hisar, Haryana</p>
        </div>
      </footer>
    </div>
  );
}
