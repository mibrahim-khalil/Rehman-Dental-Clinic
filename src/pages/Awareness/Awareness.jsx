import { Link } from "react-router-dom";
import {
  Building2,
  ChevronRight,
  GraduationCap,
  Phone,
  ShieldCheck,
  Sparkles,
  Tent,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Real awareness camp images
import camp1Img from "../../assets/images/awareness/camp1.jpeg";
import camp2Img from "../../assets/images/awareness/camp2.jpg";
import camp3Img from "../../assets/images/awareness/camp3.jpg";

import { telHref, waHref } from "../../data/clinic";
import CTABand from "../../components/CTABand/CTABand";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const WA_CAMP = waHref(
  "Hi Rehman Dental Care! We would like to organize a FREE dental camp with your team. Please share the details."
);

const PROGRAMS = [
  {
    icon: Tent,
    title: "Free Dental Screening Camps",
    text: "On-site oral health screenings with basic checkups, honest guidance, and referrals — free for communities, workplaces, and housing societies.",
    image: camp1Img,
  },
  {
    icon: GraduationCap,
    title: "School & University Sessions",
    text: "Interactive awareness sessions for students covering brushing technique, diet, and building lifelong dental habits early.",
    image: camp2Img,
  },
  {
    icon: Sparkles,
    title: "Oral Hygiene Education",
    text: "Practical, hands-on demonstrations of proper brushing, flossing, and daily care routines for every age group.",
    image: camp3Img,
  },
  {
    icon: Building2,
    title: "Corporate Dental Health Sessions",
    text: "Workplace wellbeing sessions for staff — plus on-site screening days for panel and partner organizations.",
    image: camp1Img,
  },
];

const TIPS = [
  {
    title: "Brush Twice Daily",
    text: "Use a soft brush and fluoride toothpaste for two full minutes, morning and night.",
  },
  {
    title: "Floss Every Day",
    text: "Clean between your teeth — that's where brushes can't reach and cavities love to hide.",
  },
  {
    title: "Rethink Sugary Snacks",
    text: "Limit frequent sugar exposure and rinse with water after sweets and soft drinks.",
  },
  {
    title: "Visit Every 6 Months",
    text: "Regular checkups catch small problems long before they become painful — or expensive.",
  },
  {
    title: "Replace Your Brush",
    text: "Change your toothbrush every three months, or sooner after any illness.",
  },
  {
    title: "Don't Ignore Bleeding Gums",
    text: "Bleeding when brushing is an early warning sign — early gum care prevents bigger issues.",
  },
];

export default function Awareness() {
  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-teal/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <ChevronRight className="size-3.5 text-white/30" />
                <span className="text-white/80">Awareness</span>
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Healthier Smiles, Beyond The Clinic
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Free dental screening camps, school sessions, and oral health education across
                Islamabad — because prevention is the best treatment.
              </p>
            </Reveal>
            <Reveal delay={270}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/70">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-teal" />
                  100% Free Screenings
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="size-4 text-teal" />
                  Schools, Universities & Offices
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <img
              src={camp1Img}
              alt="Free dental camp organized by Rehman Dental Care"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover ring-1 ring-white/20"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-2xl sm:left-8">
              <span className="grid size-11 place-items-center rounded-xl bg-mint text-teal-dark">
                <Tent className="size-5" />
              </span>
              <div>
                <p className="font-display text-xl leading-none text-navy">Free Dental Camps</p>
                <p className="mt-1 text-xs text-muted">For schools & organizations</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- programs */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Community Programs"
            description="Our team regularly steps outside the clinic to bring dental education and free care to the people of Islamabad."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, index) => (
              <Reveal
                key={program.title}
                as="article"
                delay={index * 80}
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Program Image */}
                <div className="relative h-36 w-full overflow-hidden bg-mint-cloud">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-xl bg-white/90 text-teal-dark shadow-sm">
                    <program.icon className="size-5" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-navy">{program.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{program.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- preventive tips */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div
          className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-mint/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" aria-hidden="true" />
              Preventive Dentistry
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Six Habits For A Lifetime Of Smiles
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              The same tips we teach at every camp — simple, free, and proven.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TIPS.map((tip, index) => (
              <Reveal
                key={tip.title}
                delay={(index % 3) * 80}
                className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
              >
                <span className="font-display text-5xl leading-none text-teal/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{tip.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Partner With Us"
        title="Organize A Free Dental Camp"
        description="Schools, universities, offices, and communities can request a completely free on-site dental screening camp with our team."
        primary={{
          label: "Chat On WhatsApp",
          href: WA_CAMP,
          icon: <FaWhatsapp className="size-[18px]" />,
          external: true,
        }}
        secondary={{
          label: "Call The Clinic",
          href: telHref,
          icon: <Phone className="size-[18px]" />,
        }}
      />
    </>
  );
}