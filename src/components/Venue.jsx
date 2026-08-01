import { Navigation, MapPin } from "lucide-react";

export function Venue({ name, address, mapsUrl }) {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    name + " " + address,
  )}&output=embed`;

  return (
    <section className="text-center mb-14 mx-3">
      {/* <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
        Wedding reception venue
      </p> */}
      <div className="mt-8 my-3 flex items-center justify-center gap-3">
        <span className="h-px w-20 bg-linear-to-r from-transparent to-primary/40" />
        <MapPin size={20} className="text-primary" />
        {/* <span className="text-primary">❦</span> */}
        <span className="h-px w-20 bg-linear-to-l from-transparent to-primary/40" />
      </div>
      <p className="text-[17px] mb-1">{name}</p>
      <p className="text-sm text-primary-text mb-4">{address}</p>

      {/* Map */}
      <div className="relative overflow-hidden rounded-xl shadow-md mb-5 z-10">
        <iframe
          src={embedUrl}
          className="w-full h-64 border-0"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding venue location"
        />
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex items-center gap-1.5 text-sm text-primary border border-primary rounded-full px-5 py-2 hover:bg-primary hover:text-white transition-colors z-10"
      >
        <Navigation size={14} /> Get directions
      </a>
    </section>
  );
}
