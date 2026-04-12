"use client";

/**
 * @param {Object} props
 * @param {number} props.currentPage
 * @param {number} props.totalPages
 * @param {(page: number) => void} props.onPageChange
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-4 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 font-label font-bold text-xs uppercase tracking-widest border border-outline-variant/30 text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        ← Prev
      </button>

      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 font-mono text-xs font-bold transition-all ${
              page === currentPage
                ? "bg-primary text-on-primary"
                : "text-secondary/60 hover:text-primary"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 font-label font-bold text-xs uppercase tracking-widest border border-outline-variant/30 text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
}
