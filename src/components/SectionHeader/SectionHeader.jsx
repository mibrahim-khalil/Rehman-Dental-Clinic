import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * Consistent section header: teal eyebrow, Bebas display title,
 * optional description, optional right-aligned link.
 */
export default function SectionHeader({ eyebrow, title, description, link, center = false }) {
  if (center) {
    return (
      <Reveal className="mx-auto max-w-2xl text-center">
        {eyebrow && (
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
            <span className="h-px w-10 bg-teal" aria-hidden="true" />
            {eyebrow}
            <span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
        )}
        <h2 className="mt-4 text-balance font-display text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
            <span className="h-px w-10 bg-teal" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-balance font-display text-4xl leading-[0.95] text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{description}</p>
        )}
      </div>

      {link && (
        <Link
          to={link.to}
          className="group inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-teal"
        >
          {link.label}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}