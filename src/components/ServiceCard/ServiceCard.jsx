import React from 'react';
import { serviceCategories } from '../../data/services';
import Reveal from '../Reveal/Reveal';

/** "Rs" in navy + amount in teal (Bebas) — or a mint pill for consult-priced care. */
export function PriceTag({ price, consult, compact = false }) {
  if (consult) {
    return (
      <span className="inline-flex w-fit items-center rounded-full bg-mint px-3 py-1 text-xs font-bold text-teal-dark">
        On Consultation
      </span>
    );
  }
  return (
    <p className={`whitespace-nowrap font-display leading-none text-teal ${compact ? "text-2xl" : "text-3xl"}`}>
      <span
        className={`mr-1 align-top font-sans font-extrabold uppercase tracking-wider text-navy ${
          compact ? "text-[9px]" : "text-[10px]"
        }`}
      >
        Rs
      </span>
      {price}
    </p>
  );
}

export default function ServiceCard({ service, index = 0 }) {
  const categoryLabel =
    serviceCategories.find((category) => category.id === service.category)?.label ?? "Treatment";

  return (
    <Reveal
      as="article"
      delay={(index % 3) * 80}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal/30"
    >
      {/* Service Image */}
      <div className="relative h-48 w-full overflow-hidden bg-mint-cloud">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span className="absolute right-5 top-5 font-display text-5xl leading-none text-mint-deep">+</span>
            <span className="absolute bottom-4 left-5 font-display text-3xl leading-none text-mint-deep">+</span>
          </div>
        )}
        
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy shadow-sm ring-1 ring-navy/5">
          {categoryLabel}
        </span>
      </div>

      {/* Details Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-teal">
          {service.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {/* Price Section */}
        <div className="mt-5 border-t border-dashed border-navy/10 pt-4 flex items-center justify-between">
          <PriceTag price={service.price} consult={service.consult} />
        </div>
      </div>
    </Reveal>
  );
}