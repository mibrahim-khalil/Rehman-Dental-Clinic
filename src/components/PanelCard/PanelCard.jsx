import { BadgeCheck } from "lucide-react";
import PanelLogo from "../PanelLogo/PanelLogo";
import Reveal from "../Reveal/Reveal";

/**
 * Structured panel card — mint header with the organization's wordmark,
 * white body with badge, full name, offer highlight, and description.
 */
export default function PanelCard({ panel, index = 0 }) {
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 80}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal/30"
    >
      <div className="flex h-32 items-center justify-center bg-mint px-6">
        <PanelLogo panel={panel} />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="w-fit rounded-full bg-mint-cloud px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-dark">
          {panel.badge}
        </span>

        <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{panel.fullName}</h3>

        <p className="mt-2 text-sm font-bold text-teal">{panel.offer}</p>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{panel.description}</p>

        <div className="mt-6 flex items-center gap-2 border-t border-dashed border-navy/10 pt-4 text-[11px] font-semibold uppercase tracking-wider text-muted">
          <BadgeCheck className="size-4 text-teal" />
          Panel Partner — Rehman Dental Care
        </div>
      </div>
    </Reveal>
  );
}