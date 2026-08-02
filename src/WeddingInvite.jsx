import { useState } from "react";
import {
  GROOM,
  BRIDE,
  WEDDING_DATE,
  VENUE_NAME,
  VENUE_ADDRESS,
  VENUE_MAPS_URL,
  SONG_URL,
} from "./config";
import { useSongToggle } from "./hooks/useSongToggle";

import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { CalendarCard } from "./components/CalendarCard";
import { Venue } from "./components/Venue";
import { MusicToggle } from "./components/MusicToggle";
import Sparkles from "./components/Sparkles";
import EnvelopeIntro from "./components/EnvelopeIntro";

export default function WeddingInvite() {
  const [opened, setOpened] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const { playing, play, toggle } = useSongToggle(SONG_URL);

  if (!opened) {
    return (
      <>
        <EnvelopeIntro
          groom={GROOM}
          bride={BRIDE}
          date={WEDDING_DATE}
          onOpen={() => {
            play();
            setOpened(true);

            requestAnimationFrame(() =>
              requestAnimationFrame(() => setShowInvite(true)),
            );
          }}
        />
      </>
    );
  }

  return (
    <div
      className={`relative min-h-screen bg-primary-background text-[#4a2f26] transition-opacity duration-1000 bg-[url('/00841_simple_floral_main.webp')] bg-cover bg-center flex justify-center ${
        showInvite ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      <Sparkles color="#9c4f3c" />

      <div className="relative max-w-120 pb-10 bg-secondary-background shadow-xl w-full overflow-hidden">
        <Hero date={WEDDING_DATE} />
        <div>
          <img
            src="/bottom.webp"
            alt="Wedding Background"
            className="absolute max-w-none -left-40 w-250 bottom-0 opacity-10 z-0"
          />

          <InfoSection groom={GROOM} bride={BRIDE} date={WEDDING_DATE} />
          <CalendarCard date={WEDDING_DATE} />
          <Venue
            name={VENUE_NAME}
            address={VENUE_ADDRESS}
            mapsUrl={VENUE_MAPS_URL}
          />

          <section className="text-center pt-6 border-t border-tertiary/50">
            <p className="text-3xl text-tertiary font-cursive">Thank you</p>
          </section>
        </div>
      </div>

      <MusicToggle playing={playing} toggle={toggle} />
    </div>
  );
}
