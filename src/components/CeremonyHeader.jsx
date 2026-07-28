export function CeremonyHeader({ groom, bride }) {
  return (
    <section className="text-center mb-14 header">
      <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
        Katb Ketab Ceremony
      </p>

      <img
        src="/icons8-lotus-100.png"
        alt=""
        className="w-36 h-36 mx-auto object-contain"
      />

      <p className="text-4xl mt-3 italic font-cursive">{groom}</p>
      <p className="text-base text-primary my-2 font-cursive">&amp;</p>
      <p className="text-4xl mb-2 italic font-cursive">{bride}</p>
      <div className="my-8 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-primary/40" />
        <span className="text-primary">❦</span>
        <span className="h-px w-12 bg-primary/40" />
      </div>
      <p className="text-4xl mb-2 italic font-cursive">October 8, 2026</p>
    </section>
  );
}
