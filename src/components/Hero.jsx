import { Logo } from "./Logo";
import { Countdown } from "./Countdown";

export function Hero({ date }) {
  return (
    <section className="relative min-h-svh ">
      <div className="relative z-10 text-center flex flex-col min-h-svh pb-5">
        <p className="text-sm tracking-[0.3em] uppercase text-primary pt-30 flex-1 max-h-100 pr-35">
          Katb Ketab Ceremony
        </p>

        <div className="relative">
          <img
            src="/top-flower.webp"
            alt="Wedding Background"
            className="absolute -top-100 xs:-top-105 -right-35 sm:-right-35 -rotate-25 w-90 xs:w-100 max-w-none"
          />
          <div className="flex flex-col items-center justify-center max-w-62.5 xs:pl-25">
            <Logo className="text-primary mb-10 h-50 w-50 xs:h-62.5 xs:w-62.5" />

            <Countdown date={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
