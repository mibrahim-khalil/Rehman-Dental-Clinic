import { serviceCategories } from "../../data/services";
import { getServiceIcon } from "../serviceIcons";
import Reveal from "../Reveal/Reveal";

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
  const Icon = getServiceIcon(service.icon);
  const categoryLabel =
    serviceCategories.find((category) => category.id === service.category)?.label ?? "Treatment";

  return (
    <Reveal
      as="article"
      delay={(index % 3) * 80}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal/30"
    >
      <div className="relative grid h-44 place-items-center overflow-hidden bg-mint-cloud">
        <span className="absolute right-5 top-5 font-display text-5xl leading-none text-mint-deep">
          +
        </span>
        <span className="absolute bottom-4 left-5 font-display text-3xl leading-none text-mint-deep">
          +
        </span>
        <div className="grid size-20 place-items-center rounded-full bg-white shadow-md ring-1 ring-navy/5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon className="size-9 text-teal" strokeWidth={1.8} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-navy/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy/60">
          {categoryLabel}
        </span>

        <h3 className="mt-4 text-lg font-bold text-navy transition-colors group-hover:text-teal">
          {service.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>

        <div className="mt-5 border-t border-dashed border-navy/10 pt-4">
          <PriceTag price={service.price} consult={service.consult} />
        </div>
      </div>
    </Reveal>
  );
}