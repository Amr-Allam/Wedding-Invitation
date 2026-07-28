import { useEffect, useState } from "react";

export function useCountdown(target) {
  const [remaining, setRemaining] = useState(() => target - new Date());

  useEffect(() => {
    const id = setInterval(() => setRemaining(target - new Date()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamp = Math.max(0, remaining);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}
