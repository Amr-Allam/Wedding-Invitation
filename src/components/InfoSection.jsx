import { Calendar } from "lucide-react";

export function InfoSection({ groom, bride, date }) {
  const timeLabel = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const weekdayLabel = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthLabel = date.toLocaleDateString("en-US", { month: "long" });
  const dayLabel = date.getDate();
  const yearLabel = date.getFullYear();

  return (
    <section className="relative text-center mb-4">
      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
        Ceremony info
      </p>
      <p className="text-base text-primary-text my-8">
        You are warmly invited to celebrate the katb ketab of
      </p>

      <div className="font-cursive text-6xl">
        <p>{groom}</p>
        <p className="text-4xl text-primary my-2 ">&amp;</p>
        <p>{bride}</p>
      </div>

      <div className="mt-8 my-3 flex items-center justify-center gap-3">
        <span className="h-px w-20 bg-linear-to-r from-transparent to-primary/40" />
        <Calendar size={20} className="text-primary" />
        {/* <span className="text-primary">❦</span> */}
        <span className="h-px w-20 bg-linear-to-l from-transparent to-primary/40" />
      </div>

      {/* <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3 flex items-center justify-center gap-1">
        Reception
      </p> */}

      <div className="flex items-center justify-center mb-1">
        <span className="px-4 text-xl" style={{ letterSpacing: "0.08em" }}>
          {weekdayLabel}
        </span>
        <span className="h-10 w-px bg-linear-to-t from-transparent via-primary/70 to-transparent" />
        <span className="px-4 text-3xl" style={{ letterSpacing: "0.08em" }}>
          {String(dayLabel).padStart(2, "0")}
        </span>
        <span className="h-10 w-px bg-linear-to-t from-transparent via-primary/70 to-transparent" />
        <span className="px-4 text-xl" style={{ letterSpacing: "0.08em" }}>
          {monthLabel}
        </span>
      </div>
      <p className="text-xs tracking-[0.15em] text-secondary-text/80 mb-2">
        {yearLabel}
      </p>

      <p className="text-xs tracking-[0.2em] uppercase text-secondary-text">
        at
      </p>
      <p className="text-base text-primary-text mt-1">{timeLabel}</p>
    </section>
  );
}
