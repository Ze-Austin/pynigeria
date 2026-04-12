/**
 * Centered loading spinner using the site's primary color.
 * @param {Object} [props]
 * @param {string} [props.label]  - Optional screen reader / visible label
 */
export default function LoadingSpinner({ label }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24 gap-4">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-primary/10" />
        <div className="absolute inset-0 border-4 border-primary border-t-transparent animate-spin" />
      </div>

      {label && (
        <p className="font-mono text-[10px] text-primary/60 uppercase tracking-widest animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
