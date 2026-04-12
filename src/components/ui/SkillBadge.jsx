/**
 * @param {Object} props
 * @param {string} props.skill
 * @param {"primary"|"secondary"|"error"|"default"} [props.variant]
 */
export default function SkillBadge({ skill, variant = "primary" }) {
  const styles = {
    primary: "bg-primary text-on-primary",
    outline: "border border-primary text-primary",
    secondary: "bg-surface-container-highest text-secondary-dim",
    error: "border border-error text-error",
    default: "bg-surface-container-highest text-secondary-dim",
  };

  return (
    <span
      className={`px-3 py-1 text-[10px] font-mono font-bold uppercase ${styles[variant] ?? styles.default}`}
    >
      {skill}
    </span>
  );
}
