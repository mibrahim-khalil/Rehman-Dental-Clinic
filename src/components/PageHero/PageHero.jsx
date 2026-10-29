import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * Navy campaign-style hero used at the top of inner pages.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-white/30" />
            <span className="text-white/80">{eyebrow}</span>
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={180}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}