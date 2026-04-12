import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import SkillBadge from "@/components/ui/SkillBadge";

const EXPERIENCE_COLORS = {
  junior: "bg-primary/10 text-primary",
  mid: "bg-secondary-container text-secondary-dim",
  senior: "bg-error/10 text-error",
};

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.username
 * @param {string} [props.avatar]
 * @param {string} [props.bio]
 * @param {string[]} [props.skills]
 * @param {string} [props.location]
 * @param {string} [props.experience_level]  - "junior" | "mid" | "senior"
 */
export default function UserCard({
  id,
  username,
  avatar,
  bio,
  skills = [],
  location,
  experience_level,
}) {
  const visibleSkills = skills.slice(0, 3);
  const extraCount = skills.length - visibleSkills.length;

  const expClass =
    EXPERIENCE_COLORS[experience_level?.toLowerCase()] ||
    "bg-surface-container-highest text-secondary";

  return (
    <div className="bg-surface-container-low p-6 border-t-2 border-primary/20 hover:border-primary hover:bg-surface-container-high transition-colors duration-200">

      {/* Avatar + Name */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <Avatar src={avatar} alt={username} size="md" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary border-2 border-surface" />
        </div>
        <div>
          <h3 className="font-headline font-bold uppercase tracking-tight">{username}</h3>
          {location && (
            <p className="text-[10px] font-mono text-primary/60 uppercase">{location}</p>
          )}
        </div>
      </div>

      {/* Bio */}
      {bio && (
        <p className="text-sm text-secondary/70 mb-6 leading-relaxed line-clamp-2">{bio}</p>
      )}

      {/* Skills */}
      {visibleSkills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {visibleSkills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
          {extraCount > 0 && (
            <span className="text-[10px] font-mono text-secondary/50 px-2 py-0.5 border border-outline-variant/30">
              +{extraCount}
            </span>
          )}
        </div>
      )}

      {/* Experience Badge */}
      {experience_level && (
        <div className="mb-6">
          <span className={`text-[9px] font-mono font-bold px-2 py-1 uppercase ${expClass}`}>
            {experience_level}
          </span>
        </div>
      )}

      {/* Link */}
      <Link
        href={`/profile/${id}`}
        className="block w-full bg-surface-container-highest text-primary font-headline font-bold text-xs py-3 text-center hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest"
      >
        View_Profile
      </Link>
    </div>
  );
}
