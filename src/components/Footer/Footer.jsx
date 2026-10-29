import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Logo } from "../Navbar/Navbar";
import clinic, { telHref, WA_APPOINTMENT } from "../../data/clinic";
import services from "../../data/services";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/panels", label: "Panels" },
  { to: "/team", label: "Team" },
  { to: "/awareness", label: "Awareness" },
  { to: "/gallery", label: "Gallery" },
];

const SOCIALS = [
  { icon: FaWhatsapp, label: "WhatsApp", href: WA_APPOINTMENT },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const popularServices = services.slice(0, 6);

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-10">
        {/* ------------------------------------------------------------ brand */}
        <div>
          <Logo dark />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            Modern, pain-free dentistry for families, students, and panel organizations across
            Islamabad — with honest pricing and gentle hands.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- quick links */}
        <nav aria-label="Footer">
          <h3 className="font-display text-lg tracking-[0.12em] text-white">QUICK LINKS</h3>
          <ul className="mt-5 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-teal"
                >
                  <span className="size-1 rounded-full bg-teal/70" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------------------------------------------------- popular services */}
        <div>
          <h3 className="font-display text-lg tracking-[0.12em] text-white">TREATMENTS</h3>
          <ul className="mt-5 space-y-2.5">
            {popularServices.map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-teal"
                >
                  <span className="size-1 rounded-full bg-teal/70" aria-hidden="true" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------------------------------------------------------- contact info */}
        <div>
          <h3 className="font-display text-lg tracking-[0.12em] text-white">VISIT US</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
              <span className="leading-relaxed">{clinic.address}</span>
            </li>
            <li>
              <a
                href={telHref}
                className="flex items-center gap-3 transition-colors hover:text-teal"
              >
                <Phone className="size-4 shrink-0 text-teal" />
                {clinic.phoneDisplay} (Call / WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-teal" />
              {clinic.hours}
            </li>
          </ul>
          <a
            href={WA_APPOINTMENT}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-navy"
          >
            <FaWhatsapp className="size-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {clinic.name} — {clinic.altName}. All rights reserved.
          </p>
          <p>
            {clinic.doctor} · {clinic.qualification}
          </p>
        </div>
      </div>
    </footer>
  );
}