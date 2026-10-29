import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image import matching your folder structure (src/assets/images/hero/dental-hero.png)
import heroImage from "../../assets/images/hero/dental-hero.png";

// Data imports
import clinic, { telHref, WA_APPOINTMENT } from "../../data/clinic";
import panels from "../../data/panels";
import { featuredServices } from "../../data/services";
import testimonials from "../../data/testimonials";

// Component imports matching your component subfolders
import CTABand from "../../components/CTABand/CTABand";
import PanelCard from "../../components/PanelCard/PanelCard";
import PanelLogo from "../../components/PanelLogo/PanelLogo";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const TICKER = [
  "Pain-Free Dentistry",
  "40% OFF For Panel Members",
  "BDS · RDS · PMDC Regd.",
  "Mon–Sat 10AM – 9PM",
  "G-8/2 · Islamabad",
  "19+ Treatments & Procedures",
];

function TickerGroup({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {TICKER.concat(TICKER).map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="px-6 font-display text-sm tracking-[0.22em] text-white/60">{item}</span>
          <span className="size-1.5 rotate-45 bg-teal" />
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy-deep">
        <img
          src={heroImage}
          alt="Dentist at Rehman Dental Clinic treating a smiling patient"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40"
          aria-hidden="true"
        />

        <div className="container relative w-full py-24 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-teal sm:text-xs">
              <span className="h-px w-12 bg-teal" aria-hidden="true" />
              {clinic.name}
            </p>
          </Reveal>

          <h1 className="mt-6 font-display text-[clamp(4.2rem,11vw,9.5rem)] leading-[0.88] tracking-[0.01em] text-white">
            <span className="hero-line">
              <span style={{ animationDelay: "120ms" }}>Smiles</span>
            </span>
            <span className="hero-line">
              <span style={{ animationDelay: "240ms" }}>Engineered</span>
            </span>
            <span className="hero-line">
              <span style={{ animationDelay: "360ms" }}>
                With&nbsp;<span className="text-teal">Care</span>
              </span>
            </span>
          </h1>

          <Reveal delay={520}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Modern dentistry. Trusted hands. Pain-free experience for every patient.
            </p>
          </Reveal>

          <Reveal delay={640}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={telHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-teal px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-navy"
              >
                <CalendarCheck className="size-[18px]" />
                Book Appointment
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/25 px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:border-teal hover:text-teal"
              >
                Explore Services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={780}>
            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-3 text-sm font-medium text-white/70">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-teal" />
                PMDC Registered Surgeon
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-teal" />
                Pain-Free Focus
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-teal" />
                Up To 40% Panel Discounts
              </span>
            </div>
          </Reveal>
        </div>

        {/* campaign ticker */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-deep/60 backdrop-blur-sm">
          <div className="marquee py-3.5">
            <div className="marquee-track">
              <TickerGroup />
              <TickerGroup hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- TRUSTED PANEL STRIP */}
      <section className="bg-mint py-14 sm:py-16">
        <div className="container">
          <Reveal className="flex flex-col gap-10 rounded-[2rem] bg-mint-deep/80 p-8 ring-1 ring-navy/5 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-sm shrink-0">
              <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl">
                <span className="block text-teal">Our Trusted</span>
                <span className="block text-navy">Authorized Panel</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                We are proud to be the part of a network of reputed and recognized institutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-7 lg:justify-end">
              {panels.map((panel) => (
                <div key={panel.id} className="flex flex-col items-center gap-2.5">
                  <PanelLogo panel={panel} size="sm" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy/45">
                    {panel.shortLabel}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------- PANEL CARDS PREVIEW */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Panels & Partners"
            title="Authorized Panels & Discounts"
            description="Exclusive corporate rates and cost-to-cost treatment programs for employees of Pakistan's leading institutions."
            link={{ to: "/panels", label: "View All Panels" }}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panels.map((panel, index) => (
              <PanelCard key={panel.id} panel={panel} index={index} />
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/panels"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-navy/15 px-8 py-3.5 text-sm font-bold text-navy transition-all duration-300 hover:border-teal hover:text-teal"
            >
              Learn More About Panels
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------- FEATURED SERVICES */}
      <section className="bg-mint-cloud py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Featured Treatments"
            title="Featured Services"
            description="From routine cleaning to complete smile makeovers — honest pricing, gentle hands, and modern equipment."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-teal"
            >
              View All Services
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------ TESTIMONIALS */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            description="Real reviews from real patients of Rehman Dental Care — families, students, and panel members across Islamabad."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- CTA */}
      <CTABand
        eyebrow="Book A Visit"
        title="Ready For A Healthier Smile?"
        description="Same-week appointments available, Monday to Saturday. Call or message us on WhatsApp — our team will find a time that suits you."
        primary={{
          label: "Book Appointment",
          href: telHref,
          icon: <Phone className="size-[18px]" />,
        }}
        secondary={{
          label: "WhatsApp Us",
          href: WA_APPOINTMENT,
          icon: <FaWhatsapp className="size-[18px]" />,
          external: true,
        }}
      />
    </>
  );
}