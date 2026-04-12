import Link from "next/link";

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.company
 * @param {string} props.location
 * @param {string} [props.salary]
 * @param {string} props.job_type        - e.g. "Full-Time", "Contract", "Internship"
 * @param {boolean} props.is_remote
 * @param {string} props.deadline        - ISO date string
 */
export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  job_type,
  is_remote,
  deadline,
}) {
  const formattedDeadline = deadline
    ? new Date(deadline).toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="bg-surface-container-low p-6 group hover:bg-surface-container-high transition-colors duration-200 border-t-2 border-primary/20 hover:border-primary">

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-surface-variant flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">work</span>
        </div>
        {is_remote && (
          <span className="text-[10px] font-mono px-2 py-1 bg-primary/10 text-primary uppercase">
            Remote
          </span>
        )}
      </div>

      {/* Title & Company */}
      <h3 className="text-xl font-headline font-bold mb-1 uppercase leading-tight">{title}</h3>
      <p className="text-secondary/60 text-sm mb-4">{company}</p>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Location */}
        <span className="text-[9px] font-mono text-primary border border-primary/40 px-2 py-0.5 uppercase">
          {location}
        </span>

        {/* Job Type */}
        {job_type && (
          <span className="text-[9px] font-mono text-secondary border border-outline-variant/40 px-2 py-0.5 uppercase">
            {job_type}
          </span>
        )}
      </div>

      {/* Salary */}
      {salary && (
        <p className="text-sm font-mono text-primary/80 mb-2">{salary}</p>
      )}

      {/* Deadline */}
      {formattedDeadline && (
        <p className="text-[10px] font-mono text-secondary/50 mb-6 uppercase">
          Deadline: {formattedDeadline}
        </p>
      )}

      {/* CTA */}
      <Link
        href={`/jobs/${id}`}
        className="block w-full bg-surface-container-highest text-primary font-headline font-bold text-xs py-3 text-center hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest"
      >
        View_Offer
      </Link>
    </div>
  );
}
