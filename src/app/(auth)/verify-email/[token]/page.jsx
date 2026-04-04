"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { verifyEmailComplete } from "@/lib/api";

export default function VerifyEmailCompletePage() {
  const { token } = useParams(); // matches /verify-email/[token]/page.jsx
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("No verification token found in the URL.");
      setStatus("error");
      return;
    }

    const verify = async () => {
      try {
        const res = await verifyEmailComplete(token);
        // Backend returns { data: { id, email, is_email_verified, message } }
        setEmail(res?.data?.email || "");
        setStatus("success");
      } catch (err) {
        const res = err?.response?.data;
        const msg =
          res?.data?.error ||
          res?.error       ||
          res?.detail      ||
          "Verification failed. The link may have expired.";
        setError(msg);
        setStatus("error");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex font-sans">

      {/* ── Left panel ── */}
      <div className="hidden lg:flex lg:w-5/12 panel-left pattern-dots flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

        <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-10">
          <img src="/logo.svg" alt="Python 9ja" className="w-8 h-8 rounded-lg"
               onError={(e) => { e.target.style.display = "none"; }} />
          <span className="font-display font-bold text-lg text-green-800">
            Python<span className="text-green-500">9ja</span>
          </span>
        </Link>

        <div className="z-10 space-y-4">
          <div className="text-5xl">📬</div>
          <h2 className="font-display text-4xl text-black leading-tight">
            One click to <br />
            <span className="text-emerald-600">join the community</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-xs">
            Verifying your email connects you to Nigeria's largest Python developer community.
          </p>
        </div>

        <p className="text-emerald-200/40 text-xs z-10">
          © {new Date().getFullYear()} Python 9ja · Made in Nigeria 🇳🇬
        </p>
      </div>

      {/* ── Right: status panel ── */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md fade-up text-center">

          {/* Mobile logo */}
          <Link href="/" className="flex items-center justify-center gap-2 mb-10 lg:hidden">
            <img src="/logo.svg" className="w-8 h-8 rounded-lg" alt="Python 9ja"
                 onError={(e) => { e.target.style.display = "none"; }} />
            <span className="font-display text-lg text-gray-900">
              Python<span className="text-emerald-600">9ja</span>
            </span>
          </Link>

          {/* ── Loading ── */}
          {status === "loading" && (
            <div className="slide-in py-8 space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" />
              </div>
              <h2 className="font-display text-2xl text-gray-900">Verifying your email…</h2>
              <p className="text-gray-400 text-sm">This will only take a moment.</p>
            </div>
          )}

          {/* ── Success ── */}
          {status === "success" && (
            <div className="slide-in py-8 space-y-4">
              <div className="text-6xl">🎉</div>
              <h2 className="font-display text-3xl text-gray-900">Email verified!</h2>
              <p className="text-gray-500 text-sm">
                {email ? (
                  <><strong>{email}</strong> has been verified successfully.</>
                ) : (
                  "Your account has been verified successfully."
                )}
              </p>
              <p className="text-gray-400 text-sm">
                You can now sign in to your account.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="btn-green inline-block px-8 py-3.5 rounded-xl text-white font-semibold text-sm"
                >
                  Go to Sign In →
                </Link>
                <Link href="/" className="text-sm text-gray-400 hover:text-emerald-600 transition-colors">
                  Back to home
                </Link>
              </div>
            </div>
          )}

          {/* ── Error ── */}
          {status === "error" && (
            <div className="slide-in py-8 space-y-4">
              <div className="text-6xl">😕</div>
              <h2 className="font-display text-3xl text-gray-900">Verification failed</h2>
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-left">
                ⚠️ {error}
              </div>
              <p className="text-gray-400 text-sm">
                The link may have expired or already been used.
                Request a new one below.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href={`/verify-email/${token}`}
                  className="btn-green inline-block px-8 py-3.5 rounded-xl text-white font-semibold text-sm"
                >
                  Resend Verification Email
                </Link>
                <Link href="/login" className="text-sm text-gray-400 hover:text-emerald-600 transition-colors">
                  Back to Sign In
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}