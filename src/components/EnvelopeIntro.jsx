import { useState } from "react";
import Sparkles from "./Sparkles";

export default function EnvelopeIntro({ onOpen, groom, bride }) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 500);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f6efe4] transition-opacity duration-700 min-h-screen bg-[url('/00841_simple_floral_main.webp')] bg-cover bg-center ${
        opening ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f6efe4]/85" />

      <Sparkles color="#9c6b52" />

      {/* Soft pattern hint */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="intro-floral"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <g fill="none" stroke="#9c6b52" strokeWidth="0.8">
                <circle cx="50" cy="50" r="6" />
                <circle cx="50" cy="35" r="4" />
                <circle cx="50" cy="65" r="4" />
                <circle cx="35" cy="50" r="4" />
                <circle cx="65" cy="50" r="4" />
                <path d="M50 44 L50 35 M50 56 L50 65 M44 50 L35 50 M56 50 L65 50" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intro-floral)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center perspective-midrange">
        {/* Envelope */}
        <button
          onClick={handleClick}
          className="group relative flex flex-col items-center outline-none cursor-pointer"
          aria-label="Open invitation"
        >
          {/* Envelope body */}
          <div className="relative h-48 w-72 overflow-visible rounded-lg border border-[#9c6b52]/20 bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1 sm:h-56 sm:w-96">
            {/* Wax seal */}
            <div
              className={`absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9c6b52] text-white shadow-md transition-all duration-500 ${
                opening ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <span className="font-serif text-xl">
                {groom[0]}&amp;{bride[0]}
              </span>
            </div>

            {/* Envelope flap (triangle) */}
            <svg
              className="absolute inset-0 h-full w-full transition-transform duration-700"
              style={{
                transformOrigin: "top center",
                transform: opening ? "rotateX(150deg)" : "rotateX(0deg)",
              }}
              viewBox="0 0 384 224"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,0 384,0 192,112"
                fill="#fdfbf7"
                stroke="#9c6b52"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
            </svg>

            {/* Bottom triangles */}
            <svg
              className="absolute bottom-0 left-0 h-1/2 w-1/2"
              viewBox="0 0 192 112"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,112 192,112 0,0"
                fill="#f9f6f0"
                stroke="#9c6b52"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </svg>
            <svg
              className="absolute bottom-0 right-0 h-1/2 w-1/2"
              viewBox="0 0 192 112"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,112 192,112 192,0"
                fill="#f9f6f0"
                stroke="#9c6b52"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </svg>
          </div>
        </button>

        {/* Hint text */}
        <p className="mt-10 animate-pulse text-xs uppercase tracking-[0.3em] text-[#4a3b3d]/50">
          Tap to open
        </p>
      </div>
    </div>
  );
}
