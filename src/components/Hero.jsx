import { Logo } from "./Logo";
import { Countdown } from "./Countdown";

export function Hero({ date }) {
  return (
    <section className="relative min-h-dvh ">
      <img
        src="/top-flower.webp"
        alt="Wedding Background"
        className="absolute top-5 -right-35 sm:-right-40 -rotate-25 w-90 xs:w-100 sm:w-120 max-w-none"
      />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="text-md tracking-[0.3em] uppercase text-primary mb-10 pt-10">
          Katb Ketab Ceremony
        </p>

        <div className="absolute top-100 left-2 sm:left-10">
          <Logo size={250} className="text-primary mb-10" />

          <Countdown date={date} />
        </div>
      </div>
    </section>
  );
}
