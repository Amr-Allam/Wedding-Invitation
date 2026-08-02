import { useCountdown } from "../hooks/useCountdown";

export function Countdown({ date }) {
  const { days, hours, minutes, seconds } = useCountdown(date);

  const units = [
    ["Days", days],
    ["Hours", hours],
    ["Min", minutes],
    ["Sec", seconds],
  ];

  return (
    <section className="text-center mb-14 ml-10">
      <p className="text-xs tracking-[0.2em] uppercase text-tertiary mb-4">
        Countdown
      </p>
      <div className="flex justify-center gap-5">
        {units.map(([label, val]) => (
          <div key={label}>
            <div className="text-2xl text-secondary">
              {String(val).padStart(2, "0")}
            </div>
            <div className="text-[11px] tracking-widest uppercase text-tertiary">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
