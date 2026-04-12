/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.actionLabel]
 * @param {() => void} [props.onAction]
 */
export default function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="bg-surface-container-low p-8 border border-outline-variant/10 flex flex-col items-center justify-center text-center min-h-[280px]">
      {/* ASCII art decoration */}
      <pre className="font-mono text-primary/20 text-[9px] mb-8 leading-tight select-none hidden sm:block">
{`   _____  ________  ________  _____
  /  _  \\ \\_____  \\ \\_____  \\/  _  \\
 /  /_\\  \\ /  ____/  /  ____/  /_\\  \\
/    |    /       \\ /       /    |    \\
\\____|__  \\_______ \\\\_______ \\____|__  /
        \\/        \\/        \\/        \\/`}
      </pre>

      <h4 className="text-xl font-headline font-bold uppercase mb-2">{title}</h4>

      {description && (
        <p className="text-sm text-secondary/50 max-w-xs mb-8 leading-relaxed">
          {description}
        </p>
      )}

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="border border-primary text-primary px-8 py-2 font-headline font-bold text-xs uppercase hover:bg-primary/10 transition-colors tracking-widest"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
