import { useMemo } from "react";
import { buildMonth } from "../utils/calendar";
import { Heart } from "lucide-react";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export function CalendarCard({ date }) {
  const monthCells = useMemo(
    () => buildMonth(date.getFullYear(), date.getMonth()),
    [date],
  );
  const monthLabel = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const dayLabel = date.getDate();

  return (
    <section className="mb-8 mx-3">
      <div className="bg-primary-background border border-secondary/50 rounded-lg px-4 py-5">
        <p className="text-center text-[15px] mb-4">{monthLabel}</p>

        <div className="grid grid-cols-7 gap-1.5 text-xs text-center text-secondary-text mb-1.5">
          {WEEKDAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {monthCells.map((d, i) => (
            <div
              key={i}
              className={`relative h-7.5 flex items-center justify-center rounded-full text-sm`}
            >
              {d === dayLabel && (
                <Heart className="absolute inset-0 m-auto h-7 w-7 fill-primary text-primary" />
              )}
              <span
                className={`relative z-10 ${d === dayLabel ? "text-white" : ""}`}
              >
                {d || ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
