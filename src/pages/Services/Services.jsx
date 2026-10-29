import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Percent, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import services, { serviceCategories } from "../../data/services";
import { telHref, WA_APPOINTMENT } from "../../data/clinic";
import CTABand from "../../components/CTABand/CTABand";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import ServiceCard from "../../components/ServiceCard/ServiceCard"; // Imported big card!

const FILTERS = [{ id: "all", label: "All" }, ...serviceCategories];

export default function Services() {
  const [filter, setFilter] = useState("all");

  const visibleCategories = serviceCategories.filter(
    (category) => filter === "all" || category.id === filter
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Treatments With Transparent Pricing"
        description="Nineteen treatments across three categories — from everyday scaling to full implants — with honest, upfront pricing for every patient."
      />

      {/* ------------------------------------------------- discount banner */}
      <div className="container">
        <Reveal className="relative z-10 -mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal-dark via-teal to-[#57b8b8] p-8 text-white shadow-2xl shadow-teal/25 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Percent className="size-7" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
                  Panel Members Save More
                </p>
                <h2 className="mt-2 font-display text-4xl leading-[0.95] sm:text-5xl">
                  40% OFF For Panel Members
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
                  Patients visiting through our authorized corporate and institutional panels enjoy
                  exclusive discounts, cost-to-cost treatment benefits, and priority appointments.
                </p>
              </div>
            </div>
            <Link
              to="/panels"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-teal-dark transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              See Panels
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* ----------------------------------------------------------- filters */}
      <div className="container mt-14">
        <Reveal className="flex flex-wrap gap-3">
          {FILTERS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setFilter(chip.id)}
              aria-pressed={filter === chip.id}
              className={`rounded-full border px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                filter === chip.id
                  ? "border-navy bg-navy text-white"
                  : "border-navy/10 bg-white text-navy/70 hover:border-teal hover:text-teal"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </Reveal>
      </div>

      {/* --------------------------------------------------------- price list */}
      <div className="container pb-20 sm:pb-24">
        {visibleCategories.map((category) => {
          const items = services.filter((service) => service.category === category.id);
          return (
            <section key={category.id} className="mt-14 first:mt-10">
              <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 pb-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                  {category.label}
                </h2>
                <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-teal-dark">
                  {items.length} treatments
                </span>
              </Reveal>

              {/* Renders the big beautiful cards in a grid exactly like the Home page */}
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, index) => (
                  <li key={service.id} className="flex flex-col">
                    <ServiceCard service={service} index={index} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {/* -------------------------------------------------------------- CTA */}
      <CTABand
        eyebrow="Get Started"
        title="Book Your Consultation"
        description="Not sure which treatment you need? Talk to us — we'll examine, explain your options, and help you choose the right plan."
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