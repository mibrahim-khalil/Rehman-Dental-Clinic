import { BadgeCheck, Quote, Star } from "lucide-react";
import Reveal from "../Reveal/Reveal";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <Reveal
      as="figure"
      delay={(index % 3) * 90}
      className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal/30"
    >
      <Quote className="absolute right-6 top-6 size-9 text-mint-deep" aria-hidden="true" />

      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
          <Star key={starIndex} className="size-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-navy/80">
        “{testimonial.text}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-navy/10 pt-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy font-display text-sm tracking-wide text-white">
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-navy">{testimonial.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <BadgeCheck className="size-3.5 shrink-0 text-teal" />
            Verified Patient
            <span className="text-navy/20">·</span>
            <span className="truncate">{testimonial.service}</span>
          </p>
        </div>
      </figcaption>
    </Reveal>
  );
}