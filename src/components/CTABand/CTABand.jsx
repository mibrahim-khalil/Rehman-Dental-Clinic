import Reveal from "../Reveal/Reveal";

/**
 * Bold navy call-to-action band. Buttons accept { label, href, icon, external }.
 */
export default function CTABand({ eyebrow, title, description, primary, secondary }) {
  const renderButton = (button, variant) => {
    if (!button) return null;
    const base =
      "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300";
    const styles =
      variant === "primary"
        ? "bg-teal text-white hover:bg-white hover:text-navy"
        : "border-2 border-white/25 text-white hover:border-teal hover:text-teal";
    return (
      <a
        href={button.href}
        {...(button.external ? { target: "_blank", rel: "noreferrer" } : {})}
        className={`${base} ${styles}`}
      >
        {button.icon}
        {button.label}
      </a>
    );
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-teal/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 size-80 rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative flex flex-col items-start gap-10 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-2xl">
          {eyebrow && (
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">{description}</p>
          )}
        </Reveal>

        <Reveal delay={140} className="flex flex-wrap gap-4">
          {renderButton(primary, "primary")}
          {renderButton(secondary, "secondary")}
        </Reveal>
      </div>
    </section>
  );
}