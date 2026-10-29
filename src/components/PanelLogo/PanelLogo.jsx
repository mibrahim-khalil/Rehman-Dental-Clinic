import ismoLogo from "../../assets/images/panels/ismo.png";
import nepraLogo from "../../assets/images/panels/nepra.png";
import iiuiLogo from "../../assets/images/panels/iiui.png";
import paecLogo from "../../assets/images/panels/paec.png";
import ptvLogo from "../../assets/images/panels/ptv.png";
import psebLogo from "../../assets/images/panels/pseb.png";

const LOGO_MAP = {
  ismo: ismoLogo,
  nepra: nepraLogo,
  iiui: iiuiLogo,
  paec: paecLogo,
  ptv: ptvLogo,
  pseb: psebLogo,
};

export default function PanelLogo({ panel, size = "lg", className = "" }) {
  const src = LOGO_MAP[panel.id];

  const sizeClass =
    size === "sm"
      ? "h-12 w-auto max-w-[110px] object-contain"
      : "h-16 w-auto max-w-[180px] object-contain"; // Increased size for larger display!

  if (!src) {
    return (
      <span className={`font-display text-2xl text-navy ${className}`}>
        {panel.abbr}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={panel.fullName}
      title={panel.fullName}
      className={`${sizeClass} ${className}`}
    />
  );
}