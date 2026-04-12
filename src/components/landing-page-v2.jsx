"use client";
import Link from "next/link";

// ─── DESIGN TOKENS (used as inline styles — no Tailwind conflict) ─────────────
const C = {
  primary:       "#8eff71",
  onPrimary:     "#0d6100",
  secondary:     "#dfe3e9",
  bg:            "#0e0e0e",
  surface:       "#0e0e0e",
  surfaceLowest: "#000000",
  surfaceLow:    "#131313",
  surfaceMid:    "#1a1919",
  surfaceHigh:   "#201f1f",
  surfaceHighest:"#262626",
  outline:       "#777575",
  outlineVar:    "#494847",
  error:         "#ff7351",
  tertiaryDim:   "#acea9a",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2,500+", label: "Members" },
  { value: "100+",   label: "Daily Engagements" },
  { value: "120+",   label: "Jobs Posted" },
  { value: "5+ yrs", label: "Running Strong" },
];

const features = [
  { icon: "school",      title: "LEARN FROM THE BEST",       desc: "Get personalized guidance from experienced Python developers to accelerate your growth and achieve your goals." },
  { icon: "forum",       title: "JOIN THE CONVERSATION",     desc: "Engage in lively discussions, share insights, and solve problems with fellow Python enthusiasts in a supportive forum." },
  { icon: "work",        title: "PYTHON JOB OPPORTUNITIES",  desc: "Explore curated job postings tailored to Python developers, data scientists, and machine learning experts across Nigeria." },
  { icon: "newspaper",   title: "TECH NEWS & UPDATES",       desc: "Stay ahead with the latest Python releases, framework updates, and industry news curated for the African tech ecosystem." },
];

const platforms = [
  { name: "WHATSAPP",  icon: "💬", href: "https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43" },
  { name: "TELEGRAM",  icon: "✈️", href: "#" },
  { name: "DISCORD",   icon: "🎮", href: "#" },
];

const tracks = [
  "Web Development", "Data Science & Analysis",
  "Machine Learning", "Automation & Scripting",
  "Job Updates", "Open Source",
];

const jobs = [
  { initials: "FB", title: "Senior Python Backend Engineer",      company: "Flutterwave • Remote (Lagos/London)", salary: "₦2.5M – ₦4.0M", unit: "PER_MONTH"      },
  { initials: "KL", title: "Machine Learning Lead",               company: "Kuda Bank • Lagos, Nigeria",          salary: "$3k – $5k",      unit: "COMP_MODEL"     },
  { initials: "PT", title: "Python Developer (Scraping Specialist)",company: "PropTech Startup • Freelance/Gig",  salary: "₦450k",          unit: "PROJECT_BASED"  },
];

const leaderboard = [
  { rank: "#1", initials: "FE", name: "Femi_Codes",  badge: "OGA AT THE TOP", xp: "12,450 XP", top: true  },
  { rank: "#2", initials: "AM", name: "Adebayo_ML",  badge: "BUG HUNTER",     xp: "10,120 XP", top: false },
  { rank: "#3", initials: "ZD", name: "Zainab_Dev",  badge: "SCRIPT KIDDY",   xp: "8,890 XP",  top: false },
];

const roadmap = [
  {
    num: "01", icon: "terminal", title: "CORE PYTHON",
    border: C.primary, bg: C.surfaceLow,
    items: [
      { done: true,  label: "Basic Syntax & Data Types" },
      { done: true,  label: "Loops & Comprehensions" },
      { done: false, label: "OOP & Classes" },
      { done: false, label: "Decorators (Wahala)" },
    ],
  },
  {
    num: "02", icon: "globe", title: "WEB & APIS",
    border: C.outlineVar, bg: C.surfaceHigh,
    items: [
      { done: false, label: "Django vs FastAPI" },
      { done: false, label: "RESTful Architecture" },
      { done: false, label: "Database Management" },
      { done: false, label: "Serverless Functions" },
    ],
  },
  {
    num: "03", icon: "neurology", title: "AI & DATA",
    border: C.outlineVar, bg: C.surfaceLow,
    items: [
      { done: false, label: "NumPy & Pandas" },
      { done: false, label: "Scikit-Learn" },
      { done: false, label: "PyTorch/TensorFlow" },
      { done: false, label: "Deploying Models" },
    ],
  },
];

const feed = [
  { time: "14:02", handle: "@Tolu_Dev",   primary: true,  indent: false, msg: "Oga, how I fit fix this recursion error? e don dey give me headache since morning." },
  { time: "14:05", handle: "@Senior_Man", primary: false, indent: true,  msg: "Abeg check your base case. You fit just dey loop till thy kingdom come." },
  { time: "14:10", handle: "@AI_Ebuka",   primary: true,  indent: false, msg: "Naija AI to the world! My first model just deploy and e sharp well well." },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const ms = (name, extra = {}) => (
  <span className="material-symbols-outlined" style={{ fontSize: 20, verticalAlign: "middle", ...extra }}>{name}</span>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&family=Manrope:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          background-color: #0e0e0e;
          color: #ffffff;
          font-family: 'Manrope', sans-serif;
          overflow-x: hidden;
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal; font-style: normal;
          line-height: 1; letter-spacing: normal; text-transform: none;
          display: inline-block; white-space: nowrap;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }

        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(142,255,113,0.05) 50%);
          background-size: 100% 4px;
          pointer-events: none;
        }

        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .font-mono     { font-family: 'JetBrains Mono', monospace; }
        .font-body     { font-family: 'Manrope', sans-serif; }

        /* Hover utilities that need actual CSS */
        .job-row { border: 1px solid rgba(73,72,71,0.2); transition: border-color 0.2s; }
        .job-row:hover { border-color: #8eff71; }

        .nav-link { color: #dfe3e9; transition: color 0.2s; text-decoration: none; }
        .nav-link:hover { color: #8eff71; }
        .nav-link-active { color: #8eff71; border-bottom: 2px solid #8eff71; padding-bottom: 4px; }

        .platform-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          transition: background 0.2s;
          color: #ffffff;
          text-decoration: none;
        }
        .platform-btn:hover { background: rgba(255,255,255,0.18); }

        .track-pill {
          border: 1px solid rgba(142,255,113,0.2);
          background: rgba(142,255,113,0.05);
          color: #8eff71;
          transition: background 0.2s;
          cursor: default;
        }
        .track-pill:hover { background: rgba(142,255,113,0.12); }

        .login-btn {
          background: #8eff71; color: #0d6100;
          transition: transform 0.1s, opacity 0.15s;
        }
        .login-btn:hover { opacity: 0.9; transform: skewX(-2deg); }

        .project-card {
          border: 1px solid rgba(73,72,71,0.2);
          transition: border-color 0.2s;
        }
        .project-card:hover { border-color: rgba(142,255,113,0.5); }

        .small-card {
          border: 1px solid rgba(73,72,71,0.2);
          background: #131313;
          transition: background 0.2s;
        }
        .small-card:hover { background: #201f1f; }

        .apply-btn {
          border: 1px solid rgba(73,72,71,0.4);
          color: #dfe3e9;
          transition: background 0.2s, color 0.2s;
        }
        .apply-btn:hover { background: #dfe3e9; color: #0e0e0e; }

        .lb-row { transition: background 0.2s; border-left: 4px solid transparent; }
        .lb-row:hover { background: rgba(255,255,255,0.04); }

        .footer-link { color: #494847; transition: color 0.2s; text-decoration: none; }
        .footer-link:hover { color: #8eff71; }

        .view-all-btn {
          border: 1px solid rgba(73,72,71,0.3);
          color: #777575;
          transition: color 0.2s, border-color 0.2s;
        }
        .view-all-btn:hover { color: #8eff71; border-color: #8eff71; }

        .explore-btn {
          border: 1px solid rgba(73,72,71,0.4);
          color: #dfe3e9;
          transition: border-color 0.2s;
        }
        .explore-btn:hover { border-color: #8eff71; }

        .enter-btn {
          border: 1px solid #8eff71; color: #8eff71;
          transition: background 0.2s, color 0.2s;
        }
        .enter-btn:hover { background: #8eff71; color: #0d6100; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline z-[100] opacity-20 pointer-events-none" />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 50,
        background: "rgba(14,14,14,0.85)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid rgba(73,72,71,0.2)`,
        boxShadow: "0 0 20px rgba(142,255,113,0.05)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "1rem 1.5rem", maxWidth: 1440, margin: "0 auto" }}>
          <div className="font-headline" style={{ fontSize: "1.5rem", fontWeight: 900, color: C.primary, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
            PYTHON9JA
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="font-headline">
            {["RESOURCES", "HIRE", "CHALLENGES", "CORE"].map((item, i) => (
              <a key={item} href="#" className={i === 0 ? "nav-link-active font-headline" : "nav-link font-headline"}
                style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                {item}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", background: C.surfaceLowest, border: `1px solid rgba(73,72,71,0.2)`, padding: "0.3rem 0.75rem" }}>
              {ms("search", { fontSize: 14, color: C.primary, marginRight: 8 })}
              <input
                style={{ background: "transparent", border: "none", outline: "none", fontSize: "0.6rem", width: 128, fontFamily: "JetBrains Mono, monospace", color: C.outline, textTransform: "uppercase" }}
                placeholder="CMD + K TO SEARCH"
              />
            </div>
            <Link href="/login">
              <button className="login-btn font-headline" style={{ padding: "0.5rem 1.5rem", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer" }}>
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "5rem" }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: 900, display: "flex", alignItems: "center", padding: "5rem 1.5rem", maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", width: "100%" }}>

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", border: `1px solid rgba(142,255,113,0.4)`, background: "rgba(142,255,113,0.05)", padding: "0.3rem 0.75rem", marginBottom: "1.5rem" }}>
                <span className="pulse" style={{ width: 8, height: 8, background: C.primary, borderRadius: "50%", marginRight: 8, display: "inline-block" }} />
                <span className="font-mono" style={{ color: C.primary, fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Nigeria&apos;s #1 Python Community
                </span>
              </div>

              <h1 className="font-headline" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "2rem" }}>
                Where Python{" "}
                <span style={{ color: C.primary }}>devs in Naija</span>{" "}
                actually grow
              </h1>

              <p style={{ fontSize: "1.1rem", color: "rgba(223,227,233,0.7)", maxWidth: 480, lineHeight: 1.7, marginBottom: "2.5rem" }}>
                No be just hello world. A space for Python enthusiasts across Nigeria to share knowledge, tackle real-world projects, and grow in tech.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <Link href="/register">
                  <button className="font-headline" style={{ background: C.primary, color: C.onPrimary, padding: "1rem 2rem", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", border: "none", cursor: "pointer", position: "relative", overflow: "hidden" }}>
                    🐍 JOIN THE FLOW
                  </button>
                </Link>
                <a href="https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43">
                  <button className="explore-btn font-headline" style={{ padding: "1rem 2rem", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", background: "transparent", cursor: "pointer" }}>
                    💬 JOIN WHATSAPP
                  </button>
                </a>
              </div>

              {/* Quick links */}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[{ href: "/jobs", icon: "💼", label: "Browse Jobs" }, { href: "/news", icon: "📰", label: "Tech News" }, { href: "/login", icon: "🔐", label: "Sign In" }].map(l => (
                  <Link key={l.label} href={l.href} className="nav-link" style={{ fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 6 }}>
                    <span>{l.icon}</span> {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — code block */}
            <div style={{ position: "relative" }}>
              <div style={{ border: `1px solid rgba(73,72,71,0.3)`, boxShadow: "0 0 50px rgba(142,255,113,0.1)", padding: 4 }}>
                {/* Title bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0.5rem 1rem", borderBottom: `1px solid rgba(73,72,71,0.2)`, background: C.surfaceLow }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.error }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbc05" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.primary }} />
                  <span className="font-mono" style={{ marginLeft: 16, fontSize: "0.6rem", color: C.outline, textTransform: "uppercase", letterSpacing: "0.15em" }}>naija_hacker_v1.py</span>
                </div>
                {/* Code */}
                <div className="font-mono" style={{ padding: "1.5rem", fontSize: "0.8rem", lineHeight: 1.8, whiteSpace: "pre", background: C.surfaceLowest }}>
                  <span style={{ color: C.primary }}>import</span>{" streamlit "}
                  <span style={{ color: C.primary }}>as</span>{" st\n"}
                  <span style={{ color: C.primary }}>from</span>{" py9ja.core "}
                  <span style={{ color: C.primary }}>import</span>{" Community\n\n"}
                  <span style={{ color: C.outline }}># Initialize the vibe</span>
                  {"\npy_vibe = Community(location="}
                  <span style={{ color: C.tertiaryDim }}>&quot;Lagos/Abuja/PH&quot;</span>
                  {")\n\n"}
                  <span style={{ color: C.primary }}>def</span>{" "}
                  <span style={{ color: C.secondary }}> main</span>{"():\n"}
                  {"    st.title("}
                  <span style={{ color: C.tertiaryDim }}>&quot;Naija Python Level Up&quot;</span>
                  {")\n\n    "}
                  <span style={{ color: C.primary }}>if</span>
                  {" user_is_focused:\n        py_vibe.upgrade_skills(\n            intensity="}
                  <span style={{ color: C.tertiaryDim }}>&quot;Oga Level&quot;</span>
                  {")\n    "}
                  <span style={{ color: C.primary }}>else</span>
                  {":\n        py_vibe.ping_community()\n\n"}
                  <span style={{ color: C.primary }}>if</span>
                  {" __name__ == "}
                  <span style={{ color: C.tertiaryDim }}>&quot;__main__&quot;</span>
                  {":\n    main()\n\n"}
                  <span className="pulse" style={{ display: "inline-block", width: 8, height: 20, background: C.primary, verticalAlign: "middle" }} />
                </div>
              </div>
              {/* Floating badge */}
              <div style={{ position: "absolute", bottom: -40, right: -40, background: C.surfaceHigh, border: `1px solid rgba(142,255,113,0.2)`, padding: "1rem" }}>
                <span className="font-mono" style={{ color: C.primary, fontSize: "0.7rem", display: "block", marginBottom: 4 }}>MEMBERS_ACTIVE</span>
                <span className="font-headline" style={{ fontSize: "1.8rem", fontWeight: 900 }}>2,500+</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: C.surfaceLow, border: `1px solid rgba(142,255,113,0.1)`, padding: "1.5rem 1rem" }}>
                <div className="font-headline" style={{ fontSize: "2rem", fontWeight: 700, color: C.primary }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: C.outline, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "JetBrains Mono" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLow, borderTop: `1px solid rgba(73,72,71,0.1)`, borderBottom: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="font-mono" style={{ display: "inline-block", border: `1px solid rgba(142,255,113,0.3)`, background: "rgba(142,255,113,0.05)", padding: "0.25rem 0.75rem", color: C.primary, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
                WHY PYTHON 9JA?
              </div>
              <h2 className="font-headline" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, textTransform: "uppercase" }}>
                What Makes Our Community <span style={{ color: C.primary }}>UNIQUE</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {features.map((f) => (
                <div key={f.title} className="small-card" style={{ padding: "1.75rem" }}>
                  <div style={{ marginBottom: "1rem" }}>{ms(f.icon, { fontSize: 32, color: C.primary })}</div>
                  <h3 className="font-headline" style={{ fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.95rem", color: C.primary }}>{f.title}</h3>
                  <p style={{ color: "rgba(223,227,233,0.6)", fontSize: "0.82rem", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / TRACKS ── */}
        <section style={{ padding: "5rem 1.5rem", maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="font-mono" style={{ display: "inline-block", border: `1px solid rgba(142,255,113,0.3)`, background: "rgba(142,255,113,0.05)", padding: "0.25rem 0.75rem", color: C.primary, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                ABOUT US
              </div>
              <h2 className="font-headline" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem", lineHeight: 1.05 }}>
                Building Nigeria&apos;s <span style={{ color: C.primary }}>Python Ecosystem</span>
              </h2>
              <p style={{ color: "rgba(223,227,233,0.65)", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.9rem" }}>
                Python 9ja is a vibrant community of developers and enthusiasts dedicated to exploring Python programming in Nigeria. Whether you&apos;re an expert or just starting out, you&apos;ll find a supportive environment to grow and collaborate.
              </p>
              <p style={{ color: "rgba(223,227,233,0.65)", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.9rem" }}>
                Our vision is to empower Python developers across Africa to connect, grow, and make a meaningful impact in tech. We believe in{" "}
                <strong style={{ color: C.secondary }}>Collaboration</strong>,{" "}
                <strong style={{ color: C.secondary }}>Inclusivity</strong>,{" "}
                <strong style={{ color: C.secondary }}>Innovation</strong>, and{" "}
                <strong style={{ color: C.secondary }}>Growth</strong>.
              </p>
              <Link href="/register">
                <button className="font-headline login-btn" style={{ padding: "0.85rem 2rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
                  JOIN THE COMMUNITY →
                </button>
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {tracks.map((t) => (
                <div key={t} className="track-pill" style={{ padding: "1rem", textAlign: "center", fontSize: "0.82rem", fontWeight: 600, fontFamily: "Space Grotesk" }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT SPOTLIGHT ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLowest, borderTop: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
              <div>
                <h2 className="font-headline" style={{ fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "0.5rem" }}>Project Spotlight</h2>
                <p style={{ color: C.outline }}>Weekly featured sauce from the community</p>
              </div>
              <button className="view-all-btn font-mono" style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.5rem 1rem", background: "transparent", cursor: "pointer", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                VIEW_GALLERY {ms("arrow_forward", { fontSize: 16 })}
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
              {/* Large card */}
              <div className="project-card" style={{ position: "relative", overflow: "hidden", background: C.surfaceLow }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOP4vvxBWhTCrvBcThcohV5Tb5eUuXvO7fKZoG55SWa62L3dChBAqV2PR1kdaOjlHNP96Z_-bLjk89RIrmmcGiTwutzmlwlUj5uNjy7yrkF-sUILG6F-q2I2_qwKjKx3Y2ns51BYYTSWLAx-sk_TbG-5ZmLPC2r5DksMBnE-rq2g0sOmE9N2PrJZN6y5IUk1ws238PKUpn5W2kO2aiBRcvpzDGdRhcbHXO_B2CvPAYBtCR4_TMf-TU55MyRwFwmujULdqL1iq5Fk"
                  alt="Project" style={{ width: "100%", height: 400, objectFit: "cover", opacity: 0.5 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0e0e0e 30%, transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2rem" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
                    <span className="font-mono" style={{ background: C.primary, color: C.onPrimary, padding: "0.2rem 0.5rem", fontSize: "0.6rem", fontWeight: 700 }}>FINTECH</span>
                    <span className="font-mono" style={{ background: C.surfaceHighest, color: C.secondary, padding: "0.2rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, border: `1px solid rgba(73,72,71,0.3)` }}>FAST_API</span>
                  </div>
                  <h3 className="font-headline" style={{ fontSize: "1.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>PayStack-Terminal-CLI</h3>
                  <p style={{ color: "rgba(223,227,233,0.6)", maxWidth: 400, marginBottom: "1.5rem", fontSize: "0.85rem" }}>A terminal-based payment monitoring tool for merchants who hate browser tabs.</p>
                  <span className="font-mono" style={{ fontSize: "0.7rem", color: C.primary }}>BY @CHIDI_CODE</span>
                </div>
              </div>

              {/* Right column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="small-card" style={{ padding: "1.5rem" }}>
                  <h3 className="font-headline" style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>Lagos-GPT</h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(223,227,233,0.6)", marginBottom: "1rem", lineHeight: 1.6 }}>Fine-tuned LLM that understands Pidgin English for local customer support.</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="font-mono" style={{ color: C.primary, fontSize: "0.65rem" }}>AI / NLP</span>
                    {ms("open_in_new", { color: C.outlineVar, fontSize: 16 })}
                  </div>
                </div>
                <div className="small-card" style={{ padding: "1.5rem" }}>
                  <h3 className="font-headline" style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>Farm-Monitor-9ja</h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(223,227,233,0.6)", marginBottom: "1rem", lineHeight: 1.6 }}>IoT dashboard for cocoa farmers in Ondo. Real-time soil data pushed to WhatsApp.</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="font-mono" style={{ color: C.primary, fontSize: "0.65rem" }}>IOT / DJANGO</span>
                    {ms("open_in_new", { color: C.outlineVar, fontSize: 16 })}
                  </div>
                </div>
                <div style={{ padding: "1.5rem", border: `1px solid rgba(142,255,113,0.2)`, background: "rgba(142,255,113,0.04)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h4 className="font-headline" style={{ fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Your Project Here?</h4>
                    <p style={{ fontSize: "0.75rem", color: "rgba(223,227,233,0.5)" }}>Submit your repo. Let the community judge.</p>
                  </div>
                  <button style={{ background: C.primary, color: C.onPrimary, border: "none", padding: "0.75rem", cursor: "pointer", transition: "transform 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                    {ms("add", { color: C.onPrimary })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY LIVE FEED ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLow, borderTop: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <h2 className="font-headline" style={{ fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Live from the <br /><span style={{ color: C.primary, textDecoration: "underline", textDecorationColor: "rgba(142,255,113,0.3)", textDecorationThickness: 4 }}>Digital Underground</span>
              </h2>
              <p style={{ color: "rgba(223,227,233,0.7)", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
                This is where the real talk happens. From bug fix begging to celebrating &quot;Who go first push to prod&quot; challenges.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {feed.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem",
                    marginLeft: item.indent ? "1.5rem" : 0,
                    background: item.indent ? C.surfaceHigh : C.surfaceLow,
                    borderLeft: item.primary ? `2px solid ${C.primary}` : "none",
                  }}>
                    <div className="font-mono" style={{ fontSize: "0.7rem", color: item.primary ? C.primary : C.outline, minWidth: 40 }}>{item.time}</div>
                    <div>
                      <span className="font-mono" style={{ fontSize: "0.7rem", fontWeight: 700, color: item.primary ? C.primary : C.secondary, display: "block", marginBottom: 4 }}>{item.handle}:</span>
                      <p style={{ fontSize: "0.82rem", color: item.primary ? C.secondary : "rgba(223,227,233,0.75)" }}>{item.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
                <input style={{ flex: 1, background: C.surface, border: `1px solid rgba(73,72,71,0.3)`, padding: "0.75rem 1rem", outline: "none", color: "#fff", fontFamily: "JetBrains Mono", fontSize: "0.7rem", textTransform: "uppercase" }}
                  placeholder="SHARE YOUR VIBE..." />
                <button className="font-headline login-btn" style={{ padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", border: "none", cursor: "pointer" }}>PUSH</button>
              </div>
            </div>

            {/* Hackathon panel */}
            <div style={{ position: "relative", height: 500, overflow: "hidden" }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv4YOn9ogg3vUOBHWj09x0pvud2vilSI_v-WYs9cZwGaTbyAzRHP-IK-7TRaGdgElCKtLIPPRMkeBSdTvp9aOzomDuDZyafnSE-5Mt36wdrdNp9L2-KMOtDmJUs1UuEuwKifpKGn1JmEYUTqBfd6OVS060-zTxTCnLPpD-pniY4kmIDgYrya1NP4Hna_jIBmmWGZ4q9TVYyeczFo7cRBU4oDTt1eE0zBW9d87plUwvmyGM7qO29XTc_nDxD4bXESf7P-dDP4J9wUs"
                alt="Devs" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${C.surfaceLowest}, transparent)` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                <div style={{ background: "rgba(14,14,14,0.85)", backdropFilter: "blur(12px)", border: `1px solid rgba(142,255,113,0.2)`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                    <span className="pulse" style={{ width: 12, height: 12, background: C.error, borderRadius: "50%", display: "inline-block" }} />
                    <span className="font-mono" style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>LIVE HACKATHON</span>
                  </div>
                  <h3 className="font-headline" style={{ fontSize: "1.4rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>Build-A-Thon: Lagos Edition</h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(223,227,233,0.6)", marginBottom: "1.5rem" }}>48 hours of non-stop code. 120 developers. 1 mission: Disrupt the status quo.</p>
                  <button className="enter-btn font-headline" style={{ width: "100%", padding: "0.85rem", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", background: "transparent", cursor: "pointer" }}>
                    ENTER STREAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEARNING ROADMAP ── */}
        <section style={{ padding: "5rem 1.5rem", maxWidth: 1440, margin: "0 auto" }}>
          <h2 className="font-headline" style={{ fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase", textAlign: "center", marginBottom: "4rem" }}>
            Path to <span style={{ color: C.primary }}>Oga Level</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", position: "relative" }}>
            {roadmap.map((path) => (
              <div key={path.num} style={{ background: path.bg, padding: "2rem", borderTop: `4px solid ${path.border}`, position: "relative" }}>
                <span className="font-headline" style={{ position: "absolute", top: -24, left: 32, fontSize: "4rem", fontWeight: 900, opacity: 0.1, color: C.primary }}>{path.num}</span>
                <h3 className="font-headline" style={{ fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
                  {ms(path.icon, { color: C.primary })} {path.title}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem", listStyle: "none" }}>
                  {path.items.map((item) => (
                    <li key={item.label} className="font-mono" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.72rem", color: item.done ? C.primary : C.secondary }}>
                      {ms(item.done ? "check_circle" : "circle", { fontSize: 14, color: item.done ? C.primary : C.secondary })}
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── JOBS BOARD ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLow, borderTop: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <h2 className="font-headline" style={{ fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase" }}>GIGS &amp; DEALS</h2>
              <div className="font-mono" style={{ display: "flex", background: C.surfaceLow, border: `1px solid rgba(73,72,71,0.3)`, padding: 4, fontSize: "0.65rem" }}>
                {["ALL_JOBS", "REMOTE_ONLY", "9JA_LOCAL", "GIG_WORK"].map((tab, i) => (
                  <button key={tab} style={{
                    padding: "0.5rem 1rem", textTransform: "uppercase", cursor: "pointer", border: "none",
                    background: i === 0 ? C.primary : "transparent",
                    color: i === 0 ? C.onPrimary : C.outline,
                    fontFamily: "JetBrains Mono",
                  }}>{tab}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {jobs.map((job) => (
                <div key={job.title} className="job-row" style={{ background: C.surfaceLow, padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div className="font-headline" style={{ width: 48, height: 48, background: C.surfaceHighest, border: `1px solid rgba(142,255,113,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: C.primary }}>
                      {job.initials}
                    </div>
                    <div>
                      <h4 className="font-headline" style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "1rem", marginBottom: 4 }}>{job.title}</h4>
                      <p style={{ fontSize: "0.8rem", color: C.outline }}>{job.company}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <div style={{ textAlign: "right" }}>
                      <span className="font-mono" style={{ display: "block", color: C.primary, fontWeight: 700 }}>{job.salary}</span>
                      <span className="font-mono" style={{ fontSize: "0.6rem", color: C.outline, textTransform: "uppercase" }}>{job.unit}</span>
                    </div>
                    <button className="apply-btn font-headline" style={{ padding: "0.5rem 1.5rem", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", cursor: "pointer", background: "transparent" }}>
                      APPLY_NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/jobs">
                <button className="view-all-btn font-headline" style={{ padding: "0.85rem 2.5rem", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", background: "transparent", cursor: "pointer" }}>
                  BROWSE ALL JOBS →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── LEADERBOARD ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLowest, borderTop: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <h2 className="font-headline" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, marginBottom: "1rem" }}>
                THE HALL <br />OF <span style={{ color: C.primary }}>FAME</span>
              </h2>
              <p style={{ color: C.outline, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.75rem" }}>WHO DEY RUN THE STREETS?</p>
            </div>

            <div style={{ background: C.surfaceLow, border: `1px solid rgba(73,72,71,0.3)`, padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {leaderboard.map((entry) => (
                  <div key={entry.name} className="lb-row" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem",
                    background: entry.top ? "rgba(142,255,113,0.08)" : "transparent",
                    borderLeft: `4px solid ${entry.top ? C.primary : "transparent"}`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span className="font-headline" style={{ fontSize: "1.4rem", fontWeight: 900, fontStyle: "italic", color: entry.top ? C.primary : "rgba(223,227,233,0.25)" }}>{entry.rank}</span>
                      <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", background: entry.top ? "rgba(142,255,113,0.15)" : "rgba(223,227,233,0.08)", border: `1px solid ${entry.top ? "rgba(142,255,113,0.4)" : "rgba(73,72,71,0.4)"}`, color: entry.top ? C.primary : C.secondary }}>
                        {entry.initials}
                      </div>
                      <div>
                        <h5 className="font-headline" style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "1rem", color: entry.top ? "#fff" : C.secondary }}>{entry.name}</h5>
                        <span className="font-mono" style={{ fontSize: "0.55rem", fontWeight: 700, padding: "0.15rem 0.4rem", background: entry.top ? C.primary : C.outlineVar, color: entry.top ? C.onPrimary : C.secondary }}>{entry.badge}</span>
                      </div>
                    </div>
                    <span className="font-mono" style={{ fontWeight: 700, color: entry.top ? C.primary : C.secondary }}>{entry.xp}</span>
                  </div>
                ))}
              </div>
              <button className="view-all-btn font-mono" style={{ width: "100%", marginTop: "1.5rem", padding: "1rem", background: "transparent", cursor: "pointer", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                VIEW_FULL_RANKING_LIST
              </button>
            </div>
          </div>
        </section>

        {/* ── PLATFORMS / JOIN ── */}
        <section style={{ padding: "5rem 1.5rem", background: C.surfaceLow, borderTop: `1px solid rgba(73,72,71,0.1)` }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div className="font-mono" style={{ display: "inline-block", border: `1px solid rgba(142,255,113,0.3)`, background: "rgba(142,255,113,0.05)", padding: "0.25rem 0.75rem", color: C.primary, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              JOIN US EVERYWHERE
            </div>
            <h2 className="font-headline" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, textTransform: "uppercase", marginBottom: "1rem" }}>
              Connect on Every <span style={{ color: C.primary }}>Platform</span>
            </h2>
            <p style={{ color: "rgba(223,227,233,0.6)", marginBottom: "3rem", fontSize: "0.9rem" }}>
              Connect with the community wherever you are.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {platforms.map((p) => (
                <a key={p.name} href={p.href} className="platform-btn font-headline" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.75rem", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  <span style={{ fontSize: "1.4rem" }}>{p.icon}</span> {p.name}
                </a>
              ))}
            </div>
            <a href="https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43">
              <button className="font-headline" style={{ background: C.primary, color: C.onPrimary, padding: "1rem 2.5rem", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
                🐍 JOIN THE COMMUNITY NOW
              </button>
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.bg, borderTop: `1px solid rgba(73,72,71,0.2)`, marginTop: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "3rem 2rem", maxWidth: 1440, margin: "0 auto", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="font-headline" style={{ fontSize: "1.1rem", fontWeight: 700, color: C.primary, marginBottom: 8 }}>PYTHON9JA_SYSTEMS</div>
            <div style={{ fontFamily: "Manrope", textTransform: "uppercase", fontSize: "0.65rem", letterSpacing: "0.15em", color: C.outlineVar }}>
              © 2024 PYTHON9JA_SYSTEMS. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            {["COMMUNITY", "X_TRANSIT", "WA_UPLINK"].map((link) => (
              <a key={link} href="#" className="footer-link" style={{ textTransform: "uppercase", fontSize: "0.65rem", letterSpacing: "0.12em", display: "flex", alignItems: "center", gap: 6 }}>
                {link}
                <span className="pulse" style={{ display: "inline-block", width: 4, height: 12, background: C.primary }} />
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", border: `1px solid rgba(73,72,71,0.2)`, padding: "0.3rem 0.75rem" }}>
              {ms("flare", { fontSize: 14, color: C.outlineVar })}
              <button style={{ color: C.primary, background: "none", border: "none", cursor: "pointer", fontSize: "0.6rem", fontWeight: 700, fontFamily: "JetBrains Mono" }}>DEV_MOOD_TOGGLE</button>
            </div>
          </div>
        </div>
        <div className="font-mono" style={{ paddingBottom: "2rem", textAlign: "center", fontSize: "0.6rem", color: "rgba(73,72,71,0.5)" }}>
          CONNECTION_STABLE :: LATENCY: 12ms :: LOC: NG_LOS_01
        </div>
      </footer>
    </>
  );
}
