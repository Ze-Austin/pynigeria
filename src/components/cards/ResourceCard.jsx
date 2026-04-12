/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} props.url
 * @param {string} [props.category]
 * @param {string[]} [props.tags]
 * @param {string} [props.created_by]
 */
export default function ResourceCard({
  title,
  description,
  url,
  category,
  tags = [],
  created_by,
}) {
  return (
    <div className="bg-surface-container-low p-6 border-t-2 border-primary/20 hover:border-primary hover:bg-surface-container-high transition-colors duration-200 relative overflow-hidden">
      <span className="absolute top-0 right-0 p-2 font-mono text-[8px] text-primary/20 uppercase">
        Type:Resource
      </span>

      {/* Title */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xl font-headline font-black text-primary mb-2 uppercase hover:underline"
      >
        {title}
      </a>

      {/* Description */}
      {description && (
        <p className="text-sm text-secondary/70 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>
      )}

      {/* Category */}
      {category && (
        <div className="mb-3">
          <span className="text-[9px] font-mono text-primary border border-primary/40 px-2 py-0.5 uppercase">
            {category}
          </span>
        </div>
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

      {/* Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono mt-4 border-t border-outline-variant/10 pt-4">
        {created_by && (
          <span className="text-secondary/50 uppercase">
            by {created_by}
          </span>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline uppercase ml-auto"
        >
          Open_Resource ↗
        </a>
      </div>
    </div>
  );
}
