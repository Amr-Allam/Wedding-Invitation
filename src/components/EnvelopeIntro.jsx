import { useState } from "react";
import Sparkles from "./Sparkles";
import { Logo } from "./Logo";

export default function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 500);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 min-h-screen bg-[url('/00841_simple_floral_main.webp')] bg-cover bg-center ${
        opening ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary-background/85" />

      <Sparkles color="#9c4f3c" />

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
              className={`absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-500 ${
                opening ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <Logo size={45} className="text-white mx-auto font-bold mr-2.5" />
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
              className="absolute inset-0 h-full w-full transition-transform duration-700 rotate-180"
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
