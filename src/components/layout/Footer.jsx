import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-[10px] tracking-[0.2em] uppercase">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-primary font-headline font-black text-sm tracking-[-0.02em]">
            PYTHON9JA
          </span>
          <span className="text-secondary/50">
            The Sovereign Script // Nigeria&apos;s Python Community
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/Python9ja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/50 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://chat.whatsapp.com/python9ja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/50 hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <Link href="/docs" className="text-secondary/50 hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-secondary/50">
          &copy; {new Date().getFullYear()} PYTHON9JA
        </div>
      </div>
    </footer>
  );
}
