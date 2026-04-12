import Link from "next/link";
import Avatar from "@/components/ui/Avatar";

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} [props.content]
 * @param {{ username: string, avatar?: string, id: string }} props.author
 * @param {string[]} [props.tags]
 * @param {number} [props.likes_count]
 * @param {number} [props.comment_count]
 * @param {string} [props.created_at]   - ISO date string
 */
export default function PostCard({
  id,
  title,
  content,
  author,
  tags = [],
  likes_count = 0,
  comment_count = 0,
  created_at,
}) {
  const timeAgo = created_at
    ? formatTimeAgo(new Date(created_at))
    : null;

  return (
    <div className="bg-surface-container-low p-6 border-t-2 border-primary/20 hover:border-primary hover:bg-surface-container-high transition-colors duration-200">

      {/* Author */}
      <div className="flex items-center space-x-3 mb-4">
        <Link href={`/profile/${author?.id}`}>
          <Avatar src={author?.avatar} alt={author?.username} size="sm" />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase font-label">{author?.username}</p>
          {timeAgo && (
            <p className="text-[8px] font-mono opacity-50 uppercase">{timeAgo}</p>
          )}
        </div>
      </div>

      {/* Title */}
      <Link href={`/community/${id}`}>
        <h4 className="text-lg font-headline font-bold mb-2 uppercase hover:text-primary transition-colors">
          {title}
        </h4>
      </Link>

      {/* Content Preview */}
      {content && (
        <p className="text-sm text-secondary/60 line-clamp-2 mb-4 leading-relaxed">
          {content}
        </p>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono text-secondary border border-outline-variant/30 px-2 py-0.5 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Engagement */}
      <div className="flex space-x-4 text-[10px] font-mono opacity-60 border-t border-outline-variant/10 pt-4">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">favorite</span>
          {formatCount(likes_count)}
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">chat</span>
          {formatCount(comment_count)}
        </span>
      </div>
    </div>
  );
}

function formatCount(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function formatTimeAgo(date) {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}
