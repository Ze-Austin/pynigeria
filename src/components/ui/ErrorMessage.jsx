/**
 * @param {Object} props
 * @param {string} props.message        - Error message to display
 * @param {string} [props.actionLabel]  - Optional retry/action button label
 * @param {() => void} [props.onAction]
 */
export default function ErrorMessage({ message, actionLabel, onAction }) {
  return (
    <div className="bg-error-container/10 border border-error/30 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <span className="material-symbols-outlined text-error text-xl shrink-0">
        error
      </span>
      <div className="flex-1">
        <p className="font-mono text-xs text-error uppercase tracking-widest">
          {message}
        </p>
      </div>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="border border-error text-error px-4 py-1.5 font-label font-bold text-xs uppercase hover:bg-error/10 transition-colors tracking-widest shrink-0"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
