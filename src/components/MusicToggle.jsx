import { VolumeX } from "lucide-react";

const BARS = [
  { delay: "0s", duration: "0.9s" },
  { delay: "0.15s", duration: "1.1s" },
  { delay: "0.3s", duration: "0.8s" },
  { delay: "0.45s", duration: "1s" },
];

export function MusicToggle({ playing, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition-colors cursor-pointer"
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
        <VolumeX size={20} />
      )}
    </button>
  );
}
