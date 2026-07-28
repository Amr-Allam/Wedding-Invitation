export function InfoSection({ groom, bride, date }) {
  const timeLabel = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const weekdayLabel = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthShort = date.toLocaleDateString("en-US", { month: "long" });
  const dayLabel = date.getDate();

  return (
    <section className="text-center mb-14 leading-loose">
      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
        Ceremony info
      </p>
      <p className="text-base text-primary-text">
        You are warmly invited to celebrate the katb ketab of
        <br />
        <strong className="font-normal text-xl">
          {groom} &amp; {bride}
        </strong>
      </p>

      <div className="my-8 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-primary/40" />
        <span className="text-primary">❦</span>
        <span className="h-px w-12 bg-primary/40" />
      </div>

      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">
        Reception
      </p>
      <p className="text-2xl">{timeLabel}</p>
      <p className="text-sm text-primary-text mt-1">
        {weekdayLabel}, {monthShort} {dayLabel}
      </p>
    </section>
  );
}
