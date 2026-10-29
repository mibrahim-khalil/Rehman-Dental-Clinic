import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Clock, MapPin, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clinic, { telHref, WA_APPOINTMENT } from "../../data/clinic";
import logoImg from "../../assets/images/logo/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/panels", label: "Panels" },
  { to: "/team", label: "Team" },
  { to: "/awareness", label: "Awareness" },
  { to: "/gallery", label: "Gallery" },
];

export function Logo({ dark = false, compact = false }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center"
      aria-label="Rehman Dental Clinic — home"
    >
      <img
        src={logoImg}
        alt="Rehman Dental Clinic"
        className={`object-contain ${
          compact ? "h-12 w-auto" : "h-16 w-auto sm:h-[4.25rem]"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* ---------------------------------------------------- top utility bar */}
      <div
        className={`overflow-hidden bg-navy-deep text-white transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-end gap-6 py-2.5 text-xs font-medium md:justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 text-white/70 md:inline-flex">
              <MapPin className="size-3.5 text-teal" />
              {clinic.addressShort}
            </span>
            <span className="hidden items-center gap-2 text-white/70 md:inline-flex">
              <Clock className="size-3.5 text-teal" />
              {clinic.hoursShort}
            </span>
          </div>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 font-bold tracking-wide text-white transition-colors hover:text-teal"
          >
            <Phone className="size-3.5 text-teal" />
            {clinic.phoneDisplay}
          </a>
        </div>
      </div>

      {/* ---------------------------------------------------------- main nav */}
      <div
        className={`bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_36px_-14px_rgba(15,43,72,0.35)]" : "border-b border-navy/5"
        }`}
      >
        {/* Adjusted height here so the bigger logo fits perfectly */}
        <div className="container flex h-[5.5rem] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative text-[15px] font-semibold transition-colors ${
                    isActive ? "text-teal" : "text-navy/70 hover:text-navy"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-teal transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telHref}
              className="hidden items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-teal lg:inline-flex"
            >
              <Phone className="size-4" />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className="group flex flex-col items-end gap-[5px] rounded-xl p-2.5 transition-colors hover:bg-mint-cloud lg:hidden"
            >
              <span className="h-[2px] w-6 rounded-full bg-navy transition-colors group-hover:bg-teal" />
              <span className="h-[2px] w-6 rounded-full bg-navy transition-colors group-hover:bg-teal" />
              <span className="h-[2px] w-4 rounded-full bg-navy transition-colors group-hover:bg-teal" />
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- mobile drawer */}
      <div className={`fixed inset-0 z-[70] lg:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between border-b border-navy/5 px-5 py-4">
            <Logo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="grid size-10 place-items-center rounded-full bg-mint-cloud text-navy transition-colors hover:bg-mint hover:text-teal-dark"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `mb-1 flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                    isActive ? "bg-mint text-teal-dark" : "text-navy hover:bg-mint-cloud"
                  }`
                }
              >
                {link.label}
                <ChevronRight className="size-4 opacity-40" />
              </NavLink>
            ))}
          </nav>

          <div className="space-y-3 border-t border-navy/10 p-5">
            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-teal px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy"
            >
              <Phone className="size-4" />
              Call Now — {clinic.phoneDisplay}
            </a>
            <a
              href={WA_APPOINTMENT}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-navy/10 px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:border-teal hover:text-teal"
            >
              <FaWhatsapp className="size-4" />
              Chat on WhatsApp
            </a>
            <p className="flex items-center justify-center gap-2 pt-1 text-xs text-muted">
              <Clock className="size-3.5 text-teal" />
              {clinic.hours}
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}