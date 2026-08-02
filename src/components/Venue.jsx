import { Navigation, MapPin } from "lucide-react";

export function Venue({ name, address, mapsUrl }) {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    name + " " + address,
  )}&output=embed`;

  return (
    <section className="text-center mb-14 mx-3">
      <div className="mt-8 my-3 flex items-center justify-center gap-3">
        <span className="h-px w-20 bg-linear-to-r from-transparent to-tertiary/40" />

        <MapPin size={20} className="text-tertiary" />

        <span className="h-px w-20 bg-linear-to-l from-transparent to-tertiary/40" />
      </div>

      <p className="text-[17px] mb-1 text-secondary">{name}</p>
      <p className="text-sm text-tertiary mb-4">{address}</p>

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
        className="relative inline-flex items-center gap-1.5 text-sm text-tertiary border border-tertiary rounded-full px-5 py-2 hover:bg-tertiary hover:text-white transition-colors z-10"
      >
        <Navigation size={14} /> Get directions
      </a>
    </section>
  );
}
