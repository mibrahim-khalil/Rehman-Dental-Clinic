import {
  CalendarClock,
  ClipboardCheck,
  HandCoins,
  IdCard,
  Info,
  Percent,
  Phone,
  Receipt,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import panels from "../../data/panels";
import clinic, { telHref, waHref } from "../../data/clinic";
import CTABand from "../../components/CTABand/CTABand";
import PageHero from "../../components/PageHero/PageHero";
import PanelCard from "../../components/PanelCard/PanelCard";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const STEPS = [
  {
    icon: IdCard,
    title: "Bring Your Verification",
    text: "Bring your employee card, university ID, or an official verification letter when you visit the clinic.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirm Your Panel Rate",
    text: "Ask our reception team to confirm your organization's panel rate before your treatment begins.",
  },
  {
    icon: Users,
    title: "Bring The Family",
    text: "Direct family members may also be eligible — it depends on your organization's agreement with us.",
  },
];

const BENEFITS = [
  { icon: Percent, label: "Up to 40% Discount" },
  { icon: HandCoins, label: "Cost-to-Cost Treatment Options" },
  { icon: CalendarClock, label: "Priority Appointments" },
  { icon: Users, label: "Family Coverage Where Applicable" },
  { icon: Receipt, label: "Transparent Pricing" },
];

const WA_PANEL_CHECK = waHref(
  "Hi Rehman Dental Care! Please confirm if my organization is on your panel. Organization: "
);

export default function Panels() {
  return (
    <>
      <PageHero
        eyebrow="Panels"
        title="Panels & Recommendations"
        description="Authorized corporate and institutional panels for trusted dental care in Islamabad."
      />

      {/* -------------------------------------------------------- panel grid */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Our Partners"
            title="Authorized Panel Organizations"
            description="Six reputed institutions trust Rehman Dental Care with the smiles of their employees, students, and families."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panels.map((panel, index) => (
              <PanelCard key={panel.id} panel={panel} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ how to avail */}
      <section className="bg-mint-cloud py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Simple Process"
            title="How To Avail Panel Benefits"
            description="Three easy steps — from the front desk to the dental chair."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <Reveal
                key={step.title}
                as="article"
                delay={index * 90}
                className="relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8"
              >
                <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[6rem] leading-none text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative grid size-13 place-items-center rounded-2xl bg-mint p-3.5 text-teal-dark">
                  <step.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex items-start gap-3 rounded-2xl bg-white/70 p-5 text-sm text-navy/70 ring-1 ring-navy/5 sm:items-center">
            <Info className="size-5 shrink-0 text-teal" />
            <p>
              Coverage varies by organization — our reception team verifies your eligibility the
              moment you arrive, so your rate is confirmed before any treatment starts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- benefits */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-teal/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" aria-hidden="true" />
              Why Panels Matter
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Panel Member Benefits
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              {clinic.name} keeps quality dental care affordable for the organizations that keep
              Pakistan running.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BENEFITS.map((benefit, index) => (
              <Reveal
                key={benefit.label}
                delay={index * 70}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
              >
                <benefit.icon className="size-7 text-teal" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-bold leading-snug text-white">{benefit.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Eligibility"
        title="Not Sure If You're Covered?"
        description="Send us your organization's name on WhatsApp — our team will confirm your panel status and rate instantly."
        primary={{
          label: "Check My Panel",
          href: WA_PANEL_CHECK,
          icon: <FaWhatsapp className="size-[18px]" />,
          external: true,
        }}
        secondary={{
          label: "Call Reception",
          href: telHref,
          icon: <Phone className="size-[18px]" />,
        }}
      />
    </>
  );
}