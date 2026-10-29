/**
 * Complete treatment catalogue — 19 services across three categories.
 * `price` is the amount display string (rendered next to a navy "Rs"),
 * `consult: true` switches rendering to an "On Consultation" pill.
 */
export const serviceCategories = [
  { id: "dental-services", label: "Dental Services" },
  { id: "dental-works", label: "Dental Works" },
  { id: "specialty", label: "Specialty" },
];

export const services = [
  // ---------------------------------------------------------- Dental Services
  {
    id: "scaling-polishing",
    name: "Scaling & Polishing",
    category: "dental-services",
    price: "5,500/-",
    icon: "sparkles",
    featured: true,
    description:
      "Deep cleaning to remove plaque, tartar, and stains — finished with a smooth, fresh polish.",
  },
  {
    id: "root-canal",
    name: "Root Canal",
    category: "dental-services",
    price: "7,000/-",
    icon: "activity",
    featured: true,
    description:
      "Precise endodontic treatment that saves infected teeth and relieves pain — comfortably.",
  },
  {
    id: "simple-filling",
    name: "Simple Filling",
    category: "dental-services",
    price: "1,200/-",
    icon: "dot",
    description: "Durable restorations for small to medium cavities, shaped to your natural bite.",
  },
  {
    id: "laser-filling",
    name: "Laser Filling",
    category: "dental-services",
    price: "3,000/-",
    icon: "zap",
    description: "Light-cured, high-precision fillings for stronger, longer-lasting repairs.",
  },
  {
    id: "pulpotomy",
    name: "Pulpotomy",
    category: "dental-services",
    price: "3,500/-",
    icon: "target",
    description: "Gentle pulp therapy that preserves baby and young permanent teeth.",
  },
  {
    id: "extraction-anteriors",
    name: "Extraction (Anteriors)",
    category: "dental-services",
    price: "1,000/-",
    icon: "minusCircle",
    description: "Safe, painless removal of front teeth with complete aftercare guidance.",
  },
  {
    id: "extraction-posteriors",
    name: "Extraction (Posteriors)",
    category: "dental-services",
    price: "2,500/-",
    icon: "minusSquare",
    description: "Comfortable removal of molars and premolars — including difficult cases.",
  },
  {
    id: "laser-whitening",
    name: "Laser Whitening",
    category: "dental-services",
    price: "30,000/-",
    icon: "sun",
    featured: true,
    description:
      "Single-session professional whitening that lifts years of stains, several shades brighter.",
  },
  {
    id: "dental-jewelry",
    name: "Dental Jewelry",
    category: "dental-services",
    price: "10,000/-",
    icon: "gem",
    description: "Trendy tooth gems and crystals, applied safely by a dental professional.",
  },
  // ------------------------------------------------------------- Dental Works
  {
    id: "metal-crown",
    name: "Metal Crown",
    category: "dental-works",
    price: "4,500/-",
    icon: "shield",
    description: "Strong full-metal crowns for back teeth that carry heavy chewing loads.",
  },
  {
    id: "pfm-crown",
    name: "PFM Crown",
    category: "dental-works",
    price: "5,500/-",
    icon: "layers",
    description: "Porcelain-fused-to-metal crowns balancing strength with a natural look.",
  },
  {
    id: "gold-crown",
    name: "Gold Crown",
    category: "dental-works",
    price: "6,000/-",
    icon: "crown",
    description: "Premium gold crowns — biocompatible, precise, and gentle on opposing teeth.",
  },
  {
    id: "zirconium-crown",
    name: "Zirconium Crown",
    category: "dental-works",
    price: "20,000/-",
    icon: "diamond",
    featured: true,
    description: "Metal-free zirconia crowns with lifelike translucency and top-tier strength.",
  },
  {
    id: "dentures",
    name: "Dentures",
    category: "dental-works",
    consult: true,
    icon: "smile",
    description: "Complete and partial dentures tailored for fit, comfort, and confidence.",
  },
  {
    id: "cc-plates",
    name: "C-C Plates",
    category: "dental-works",
    consult: true,
    icon: "grid",
    description: "Cast partial (C-C) plates designed for secure, discreet tooth replacement.",
  },
  {
    id: "veneers",
    name: "Veneers",
    category: "dental-works",
    consult: true,
    icon: "sheet",
    description: "Wafer-thin porcelain veneers to reshape, resize, and brighten your smile.",
  },
  // ---------------------------------------------------------------- Specialty
  {
    id: "braces",
    name: "Braces",
    category: "specialty",
    price: "1,20,000/-",
    icon: "grip",
    featured: true,
    description: "Fixed orthodontic treatment that aligns crowded, spaced, or misaligned teeth.",
  },
  {
    id: "aligners",
    name: "Aligners",
    category: "specialty",
    price: "1,60,000/-",
    icon: "tray",
    description: "Nearly invisible clear aligner therapy for discreet smile straightening.",
  },
  {
    id: "implants",
    name: "Implants",
    category: "specialty",
    price: "1,80,000/-",
    icon: "anchor",
    featured: true,
    description: "Permanent titanium implants that look, feel, and function like natural teeth.",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export default services;