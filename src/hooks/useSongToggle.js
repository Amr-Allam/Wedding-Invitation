import { useEffect, useRef, useState } from "react";

export function useSongToggle(src) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => audio.pause();
  }, [src]);

  const play = () => {
    audioRef.current?.play().catch(() => {});
    setPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? pause() : play());

  return { playing, play, pause, toggle };
}
