"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/components/ui/Avatar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-[-0.04em] text-primary font-headline uppercase">
          PYTHON9JA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-label font-bold tracking-tighter uppercase text-xs">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`px-2 py-1 transition-all duration-75 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary opacity-70 hover:text-primary hover:bg-surface-variant"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {/* Notification Bell */}
              <button className="text-primary hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">notifications</span>
              </button>

              {/* Dashboard Link */}
              <Link
                href="/dashboard"
                className="font-label font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              >
                Dashboard
              </Link>

              {/* Avatar */}
              <Link href={`/profile/${user?.id}`}>
                <Avatar src={user?.avatar} alt={user?.username} size="sm" />
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="font-label font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors px-2 py-1"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-primary text-on-primary px-6 py-2 font-label font-bold tracking-widest text-xs hover:shadow-[0_0_15px_rgba(142,255,113,0.5)] transition-all"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/20 px-6 py-6 flex flex-col space-y-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-label font-bold text-xs uppercase tracking-widest py-2 border-b border-outline-variant/10 ${
                  isActive ? "text-primary" : "text-secondary opacity-70"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="pt-4 flex flex-col space-y-3">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="font-label font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <Avatar src={user?.avatar} alt={user?.username} size="sm" />
                  <span className="font-label text-xs font-bold uppercase text-secondary">
                    {user?.username}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="font-label font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary py-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary text-on-primary px-6 py-3 font-label font-bold tracking-widest text-xs text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
