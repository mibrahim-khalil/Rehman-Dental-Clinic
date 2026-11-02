import { useCallback, useEffect, useState } from "react";
import {
  Armchair,
  Camera,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Image as ImageIcon,
  Microscope,
  Play,
  Tent,
  X,
} from "lucide-react";

import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";

// Import Real Photos (.jpeg)
import img2 from "../../assets/images/gallery/image2.jpeg";
import img3 from "../../assets/images/gallery/image3.jpeg";
import img4 from "../../assets/images/gallery/image4.jpeg";
import img5 from "../../assets/images/gallery/image5.jpeg";
import img6 from "../../assets/images/gallery/image6.jpeg";
import img7 from "../../assets/images/gallery/image7.jpeg";
import img8 from "../../assets/images/gallery/image8.jpeg";
import img9 from "../../assets/images/gallery/image9.jpeg";
import img13 from "../../assets/images/gallery/image13.jpeg";
import img14 from "../../assets/images/gallery/image14.jpeg";
import img15 from "../../assets/images/gallery/image15.jpeg";
import img16 from "../../assets/images/gallery/image16.jpeg";
import img17 from "../../assets/images/gallery/image17.jpeg";

// Import Real Videos (.mp4)
import vid0 from "../../assets/videos/video.mp4";
import vid1 from "../../assets/videos/video1.mp4";
import vid2 from "../../assets/videos/video2.mp4";
import vid3 from "../../assets/videos/video3.mp4";
import vid4 from "../../assets/videos/video4.mp4";
import vid5 from "../../assets/videos/video5.mp4";
import vid6 from "../../assets/videos/video6.mp4";

const CATEGORIES = ["All", "Clinic Interior", "Equipment", "Patient Care", "Dental Camps"];

const CATEGORY_ICONS = {
  "Clinic Interior": Armchair,
  Equipment: Microscope,
  "Patient Care": HeartPulse,
  "Dental Camps": Tent,
};

const TONES = {
  navy: "bg-navy text-white",
  teal: "bg-teal text-white",
  mint: "bg-mint text-navy",
  cloud: "bg-mint-cloud text-navy",
};

const ITEMS = [
  {
    id: 1,
    type: "image",
    category: "Patient Care",
    title: "Gentle Treatment In Progress",
    caption: "A routine procedure performed with our signature pain-free technique.",
    src: img3,
    ratio: "3 / 4",
  },
  {
    id: 2,
    type: "image",
    category: "Clinic Interior",
    title: "Reception & Waiting Lounge",
    caption: "A calm, comfortable welcome area for patients and families.",
    src: img2,
    ratio: "4 / 3",
  },
  {
    id: 3,
    type: "video",
    category: "Clinic Interior",
    title: "Clinic Tour",
    caption: "A full video walkthrough of Rehman Dental Care.",
    src: vid0,
    duration: "01:24",
    ratio: "4 / 3",
  },
  {
    id: 4,
    type: "image",
    category: "Equipment",
    title: "Sterilization Station",
    caption: "Class-B sterilization — every single instrument, every single time.",
    src: img4,
    ratio: "1 / 1",
  },
  {
    id: 5,
    type: "image",
    category: "Clinic Interior",
    title: "Modern Operatory",
    caption: "Sterile, well-lit treatment rooms with up-to-date equipment.",
    src: img5,
    ratio: "4 / 3",
  },
  {
    id: 6,
    type: "image",
    category: "Dental Camps",
    title: "School Awareness Visit",
    caption: "Teaching students the right way to brush and care for their teeth.",
    src: img6,
    ratio: "3 / 4",
  },
  {
    id: 7,
    type: "image",
    category: "Equipment",
    title: "Digital Radiology Setup",
    caption: "Low-dose digital imaging for fast, accurate diagnosis.",
    src: img7,
    ratio: "4 / 3",
  },
  {
    id: 8,
    type: "image",
    category: "Dental Camps",
    title: "Community Screening Camp",
    caption: "Free dental screenings for families at our community camps.",
    src: img8,
    ratio: "4 / 3",
  },
  {
    id: 9,
    type: "video",
    category: "Dental Camps",
    title: "Camp Highlights Reel",
    caption: "Video highlights from our latest free dental camp.",
    src: vid2,
    duration: "00:58",
    ratio: "3 / 4",
  },
  {
    id: 10,
    type: "image",
    category: "Clinic Interior",
    title: "Consultation Corner",
    caption: "A private space for treatment planning and patient counseling.",
    src: img9,
    ratio: "1 / 1",
  },
  {
    id: 11,
    type: "image",
    category: "Patient Care",
    title: "Every Smile, Followed Up",
    caption: "Post-treatment reviews and follow-up calls for every patient.",
    src: img13,
    ratio: "4 / 3",
  },
  {
    id: 12,
    type: "video",
    category: "Equipment",
    title: "Our Technology Stack",
    caption: "A closer look at the equipment behind pain-free dentistry.",
    src: vid3,
    duration: "02:10",
    ratio: "4 / 3",
  },
  {
    id: 13,
    type: "image",
    category: "Clinic Interior",
    title: "Advanced Diagnostics",
    caption: "High-tech diagnostic tools for precise treatment planning.",
    src: img14,
    ratio: "4 / 3",
  },
  {
    id: 14,
    type: "video",
    category: "Patient Care",
    title: "Patient Experience",
    caption: "A glimpse into our comfortable and pain-free procedures.",
    src: vid1,
    duration: "01:15",
    ratio: "3 / 4",
  },
  {
    id: 15,
    type: "image",
    category: "Equipment",
    title: "Precision Tools",
    caption: "State-of-the-art dental instruments for optimal results.",
    src: img15,
    ratio: "1 / 1",
  },
  {
    id: 16,
    type: "video",
    category: "Clinic Interior",
    title: "Facilities Overview",
    caption: "Take a look around our modern and hygienic clinic.",
    src: vid4,
    duration: "01:45",
    ratio: "4 / 3",
  },
  {
    id: 17,
    type: "image",
    category: "Clinic Interior",
    title: "Comfortable Setup",
    caption: "Ergonomic dental chairs designed for patient relaxation.",
    src: img16,
    ratio: "4 / 3",
  },
  {
    id: 18,
    type: "video",
    category: "Dental Camps",
    title: "Community Outreach",
    caption: "Highlights from our recent oral health awareness drives.",
    src: vid5,
    duration: "02:00",
    ratio: "3 / 4",
  },
  {
    id: 19,
    type: "image",
    category: "Patient Care",
    title: "Happy Patient",
    caption: "Restoring confidence with beautiful, healthy smiles.",
    src: img17,
    ratio: "3 / 4",
  },
  {
    id: 20,
    type: "video",
    category: "Equipment",
    title: "Modern Dentistry",
    caption: "Utilizing the latest technology for efficient dental care.",
    src: vid6,
    duration: "01:30",
    ratio: "4 / 3",
  },
];

/** Shared visual for grid tiles and the lightbox — image, placeholder, or video card. */
function ItemVisual({ item, large = false }) {
  const CategoryIcon = CATEGORY_ICONS[item.category] ?? ImageIcon;

  // 1. If it's a video AND we are in the lightbox (large), play the video!
  if (item.type === "video" && item.src && large) {
    return (
      <video
        src={item.src}
        className="absolute inset-0 h-full w-full object-contain bg-black"
        controls
        autoPlay
        playsInline
      />
    );
  }

  // 2. If it's an image, display the image
  if (item.type === "image" && item.src) {
    return (
      <img
        src={item.src}
        alt={item.title}
        className={`absolute inset-0 h-full w-full ${
          large ? "object-contain bg-black/5" : "object-cover transition-transform duration-500 group-hover:scale-105"
        }`}
        loading="lazy"
      />
    );
  }

  // 3. Fallback for videos in the grid (shows the beautiful Play button placeholder)
  const tone = item.type === "video" ? "navy" : (item.tone || "cloud");
  const onDark = tone === "navy" || tone === "teal";

  return (
    <div
      className={`placeholder-texture absolute inset-0 flex flex-col items-center justify-center gap-3 ${TONES[tone]}`}
    >
      {item.type === "video" ? (
        <>
          <span
            className={`grid place-items-center rounded-full bg-white/15 ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-110 ${
              large ? "size-20" : "size-14"
            }`}
          >
            <Play className={`${large ? "size-8" : "size-6"} fill-white text-white`} />
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
            Video · {item.duration || "01:00"}
          </span>
        </>
      ) : (
        <>
          <span
            className={`grid place-items-center rounded-full ${
              onDark ? "bg-white/15 text-white" : "bg-white/70 text-teal-dark"
            } ${large ? "size-20" : "size-14"}`}
          >
            <CategoryIcon className={large ? "size-9" : "size-6"} strokeWidth={1.6} />
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.26em] ${
              onDark ? "text-white/60" : "text-navy/50"
            }`}
          >
            <Camera className="mr-1.5 inline size-3 align-[-1px]" />
            Photo Coming Soon
          </span>
        </>
      )}
    </div>
  );
}

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const visible = ITEMS.filter((item) => category === "All" || item.category === category);
  const active = activeIndex !== null ? visible[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (direction) => {
      setActiveIndex((index) =>
        index === null ? null : (index + direction + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  useEffect(() => {
    if (activeIndex === null) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, step]);

  useEffect(() => {
    setActiveIndex(null);
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside Rehman Dental Care"
        description="Clinic interiors, equipment, patient care, and our community dental camps — with fresh photography being added regularly."
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          {/* ------------------------------------------------ filters */}
          <Reveal className="flex flex-wrap gap-3">
            {CATEGORIES.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setCategory(name)}
                aria-pressed={category === name}
                className={`rounded-full border px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                  category === name
                    ? "border-navy bg-navy text-white"
                    : "border-navy/10 bg-white text-navy/70 hover:border-teal hover:text-teal"
                }`}
              >
                {name}
              </button>
            ))}
          </Reveal>

          {/* ------------------------------------------- masonry grid */}
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {visible.map((item, index) => (
              <Reveal
                key={item.id}
                delay={(index % 3) * 60}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open ${item.title}`}
                  className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-teal"
                  style={{ aspectRatio: item.ratio }}
                >
                  <ItemVisual item={item} />

                  <div
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/35 to-transparent p-5 pt-14"
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                    <p className="mt-2 text-sm font-bold text-white">{item.title}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <p className="text-sm text-muted">
              Explore our clinic facilities, patient treatments, and video walkthroughs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={close}
            className="absolute inset-0 cursor-default bg-navy-deep/85 backdrop-blur-sm"
          />

          <figure className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="relative aspect-[16/10]">
              <ItemVisual item={active} large />
            </div>

            <figcaption className="p-6 sm:p-7">
              <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-dark">
                {active.category}
              </span>
              <h3 className="mt-3 font-display text-3xl leading-none text-navy">{active.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{active.caption}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy/40">
                {activeIndex + 1} of {visible.length}
              </p>
            </figcaption>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition-colors hover:bg-navy hover:text-white"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous item"
              className="absolute left-4 top-[38%] grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition-colors hover:bg-teal hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next item"
              className="absolute right-4 top-[38%] grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition-colors hover:bg-teal hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </figure>
        </div>
      )}
    </>
  );
}