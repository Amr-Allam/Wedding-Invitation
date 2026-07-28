import { useEffect, useRef } from "react";

export default function Sparkles({ color = "#fff", shadow = "#fff" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;

    const PARTICLE_COUNT = 30;

    const resize = () => {
      height = canvas.height = document.documentElement.scrollHeight;
      width = canvas.width = document.documentElement.clientWidth;
    };

    resize();
    window.addEventListener("resize", resize);

    const rand = (min, max) => Math.random() * (max - min) + min;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rand(0, width),
      y: rand(0, height),
      size: rand(1.5, 3.5),
      speedY: rand(0.02, 0.08),
      swayAmp: rand(5, 15),
      swaySpeed: rand(0.15, 0.35),
      swayOffset: rand(0, Math.PI * 2),
      twinklePhase: rand(0, Math.PI * 2),
      twinkleSpeed: rand(0.02, 0.05),
      opacity: rand(0.6, 0.9),
      t: rand(0, 100),
    }));

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.t += 0.016;
        p.y -= p.speedY;

        p.x += Math.sin(p.t * p.swaySpeed + p.swayOffset) * p.swayAmp * 0.008;

        p.twinklePhase += p.twinkleSpeed;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = rand(0, width);
        }

        const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.twinklePhase));

        ctx.save();

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.shadowColor = shadow;
        ctx.shadowBlur = p.size * 8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [color, shadow]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
}
