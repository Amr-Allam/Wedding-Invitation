import { VolumeOff } from "lucide-react";

const BARS = [
  { delay: "0s", duration: "0.9s" },
  { delay: "0.15s", duration: "1.1s" },
  { delay: "0.3s", duration: "0.8s" },
  { delay: "0.45s", duration: "1s" },
];

export function MusicToggle({ playing, toggle }) {
  return (
    <div className="fixed bottom-6 right-6 flex items-center justify-center">
      {/* Breathing halo, only visible while playing */}
      {playing && (
        <>
          <span className="absolute w-12 h-12 rounded-full bg-primary/40 animate-halo-pulse" />
          <span
            className="absolute w-12 h-12 rounded-full bg-primary/40 animate-halo-pulse"
            style={{ animationDelay: "1s" }}
          />
        </>
      )}

      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="relative w-12 h-12 rounded-full text-white flex items-center justify-center
                   bg-gradient-to-br from-primary to-primary-hover
                   shadow-[0_4px_16px_rgba(156,79,60,0.45)]
                   hover:shadow-[0_6px_20px_rgba(156,79,60,0.55)]
                   transition-shadow duration-300 cursor-pointer"
      >
        {playing ? (
          <div className="flex items-end gap-0.75 h-4">
            {BARS.map((bar, i) => (
              <span
                key={i}
                className="w-0.75 bg-white rounded-full eq-bar"
                style={{
                  animationDelay: bar.delay,
                  animationDuration: bar.duration,
                }}
              />
            ))}
          </div>
        ) : (
          <VolumeOff size={20} />
        )}
      </button>
    </div>
  );
}
