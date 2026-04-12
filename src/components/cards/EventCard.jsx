import Link from "next/link";

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} props.date           - ISO date string
 * @param {string} [props.location]
 * @param {boolean} props.is_online
 * @param {string} [props.event_type]   - e.g. "Meetup", "Workshop", "Hackathon"
 * @param {string} [props.online_link]
 */
export default function EventCard({
  id,
  title,
  description,
  date,
  location,
  is_online,
  event_type,
  online_link,
}) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const formattedTime = date
    ? new Date(date).toLocaleTimeString("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div className="bg-surface-container-low border-t-2 border-primary/20 hover:border-primary hover:bg-surface-container-high transition-colors duration-200 overflow-hidden">

      {/* Date Banner */}
      <div className="p-6 pb-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
            {formattedDate} {formattedTime && `// ${formattedTime}`}
          </span>
          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_today
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-headline font-bold mb-2 uppercase leading-tight">{title}</h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-secondary/70 mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`text-[9px] font-mono px-2 py-0.5 uppercase ${
              is_online
                ? "bg-primary/10 text-primary border border-primary/30"
                : "bg-surface-container-highest text-secondary border border-outline-variant/30"
            }`}
          >
            {is_online ? "Online" : "In-Person"}
          </span>

          {event_type && (
            <span className="text-[9px] font-mono text-secondary border border-outline-variant/30 px-2 py-0.5 uppercase">
              {event_type}
            </span>
          )}
        </div>

        {/* Location / Link */}
        {is_online && online_link ? (
          <a
            href={online_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-primary hover:underline block mb-6 truncate"
          >
            {online_link}
          </a>
        ) : location ? (
          <p className="text-[10px] font-mono text-secondary/50 mb-6 uppercase">{location}</p>
        ) : null}

        {/* RSVP */}
        <Link
          href={`/events/${id}`}
          className="block w-full bg-surface-container-highest text-primary font-headline font-bold text-xs py-3 text-center hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest"
        >
          RSVP
        </Link>
      </div>
    </div>
  );
}
