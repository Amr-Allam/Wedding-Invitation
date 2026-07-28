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

import { CeremonyHeader } from "./components/CeremonyHeader";
import { InfoSection } from "./components/InfoSection";
import { Countdown } from "./components/Countdown";
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
      className={`relative min-h-screen bg-[#f6efe4] text-[#4a2f26] transition-opacity duration-1000 bg-[url('/00841_simple_floral_main.webp')] bg-cover bg-center ${
        showInvite ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f6efe4]/85" />

      <Sparkles color="#9c4f3c" />
      <div className="relative max-w-120 mx-auto px-6 pt-14 pb-10">
        <CeremonyHeader groom={GROOM} bride={BRIDE} />
        <InfoSection groom={GROOM} bride={BRIDE} date={WEDDING_DATE} />
        <Countdown date={WEDDING_DATE} />
        <CalendarCard date={WEDDING_DATE} />
        <Venue
          name={VENUE_NAME}
          address={VENUE_ADDRESS}
          mapsUrl={VENUE_MAPS_URL}
        />

        <section className="text-center pt-6 border-t border-secondary/50">
          <p className="text-lg italic">Thank you</p>
        </section>
      </div>

      <MusicToggle playing={playing} toggle={toggle} />
    </div>
  );
}
