import { ArrowRight, Phone, Quote, UserRound } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clinic, { telHref, WA_APPOINTMENT } from "../../data/clinic";
import CTABand from "../../components/CTABand/CTABand";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";

const TEAM = [
  {
    badge: "Lead Dentist",
    badgeStyle: "bg-teal text-white",
    name: "Dr. Aneela Rehman",
    role: "Dental Surgeon",
    credentials: "BDS, RDS, PMDC Regd.",
    description:
      "Provides compassionate, modern dental care with a focus on preventive and restorative dentistry — gentle, ethical, and always patient-first. Every treatment plan is explained clearly before a single instrument is picked up.",
    cta: "Book With Dr. Aneela",
  },
  {
    badge: "Operations",
    badgeStyle: "bg-navy text-white",
    name: "Sir Adnan Khan",
    role: "Operations Manager / Clinic Director",
    credentials: "Patient Coordination · Panels & Appointments",
    description:
      "Handles patient coordination, panels and corporate queries, appointment scheduling, and day-to-day clinic operations — your first point of contact for anything Rehman Dental Care.",
    cta: "Talk To Adnan",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet The People Behind The Smiles"
        description="A small team with a big promise — gentle, honest, and organized care from your first phone call to your final checkup."
      />

      <section className="py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {TEAM.map((member, index) => (
              <Reveal
                as="article"
                key={member.name}
                delay={index * 120}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal/25"
              >
                {/* grey photo placeholder */}
                <div className="placeholder-texture relative grid aspect-[16/9] place-items-center bg-[#d6e0e9]">
                  <div className="flex flex-col items-center gap-3 text-muted">
                    <span className="grid size-16 place-items-center rounded-full bg-white/70 shadow-inner">
                      <UserRound className="size-8" strokeWidth={1.6} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.28em]">
                      Photo Coming Soon
                    </span>
                  </div>
                  <span
                    className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${member.badgeStyle}`}
                  >
                    {member.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal">
                    {member.role}
                  </p>
                  <h2 className="mt-2 font-display text-4xl leading-[0.95] text-navy sm:text-[2.75rem]">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-muted">{member.credentials}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {member.description}
                  </p>
                  <div className="mt-6 border-t border-dashed border-navy/10 pt-5">
                    <a
                      href={telHref}
                      className="group inline-flex items-center gap-2 text-sm font-bold text-teal-dark transition-colors hover:text-navy"
                    >
                      {member.cta}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ------------------------------------------ community message */}
          <Reveal className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] bg-mint px-8 py-12 text-center ring-1 ring-navy/5 sm:px-14">
            <Quote className="mx-auto size-10 text-teal" aria-hidden="true" />
            <p className="mt-5 font-display text-3xl leading-[1.05] text-navy sm:text-4xl">
              Serving families, students, and panel organizations across Islamabad with ethical and
              affordable dental care.
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-teal-dark">
              — The {clinic.altName} Team
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Say Hello"
        title="Experience Gentle Dentistry"
        description="Meet Dr. Aneela Rehman and the team in person — consultations are friendly, unhurried, and pressure-free."
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