"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// ─── Static resource data (swap with API later) ───────────────────────────────
const CATEGORIES = ["All", "Beginner", "Data Science", "Web Dev", "Machine Learning", "Automation", "Interview Prep"];

const RESOURCES = [
  {
    id: 1, category: "Beginner",
    title: "Python 9ja Starter Pack",
    desc: "Everything you need to get started with Python in Nigeria. Covers setup, basics, and your first project.",
    type: "PDF", size: "2.4 MB", downloads: 1240, emoji: "🐍",
    tags: ["Python", "Beginners"], href: "#",
  },
  {
    id: 2, category: "Data Science",
    title: "Pandas & NumPy Cheatsheet",
    desc: "A comprehensive two-page cheatsheet covering the most used Pandas and NumPy operations with examples.",
    type: "PDF", size: "1.1 MB", downloads: 873, emoji: "📊",
    tags: ["Pandas", "NumPy", "Data"], href: "#",
  },
  {
    id: 3, category: "Web Dev",
    title: "Django REST Framework Guide",
    desc: "Build production-ready REST APIs with Django. Includes auth, serializers, viewsets and deployment tips.",
    type: "PDF", size: "3.8 MB", downloads: 654, emoji: "🌐",
    tags: ["Django", "REST", "API"], href: "#",
  },
  {
    id: 4, category: "Machine Learning",
    title: "ML Roadmap for Python Devs",
    desc: "A structured 6-month roadmap from Python basics to deploying ML models. Curated by our community.",
    type: "PDF", size: "890 KB", downloads: 1102, emoji: "🤖",
    tags: ["ML", "Roadmap", "sklearn"], href: "#",
  },
  {
    id: 5, category: "Interview Prep",
    title: "Python Interview Questions Bank",
    desc: "200+ Python interview questions with detailed answers. Covers data structures, OOP, and system design.",
    type: "PDF", size: "2.2 MB", downloads: 2034, emoji: "💼",
    tags: ["Interview", "Career"], href: "#",
  },
  {
    id: 6, category: "Automation",
    title: "Automate the Nigerian Way",
    desc: "Real automation scripts for common tasks: web scraping Nigerian websites, file management, and WhatsApp bots.",
    type: "ZIP", size: "5.6 MB", downloads: 431, emoji: "⚡",
    tags: ["Automation", "Scraping", "Bots"], href: "#",
  },
  {
    id: 7, category: "Beginner",
    title: "Git & GitHub for Python Devs",
    desc: "Version control made simple. Learn Git workflows, branching, and contributing to open source projects.",
    type: "PDF", size: "1.7 MB", downloads: 789, emoji: "🔧",
    tags: ["Git", "GitHub", "Workflow"], href: "#",
  },
  {
    id: 8, category: "Data Science",
    title: "Data Visualization with Matplotlib",
    desc: "Create stunning charts and dashboards. 50+ code examples with Nigerian datasets for context.",
    type: "Notebook", size: "3.1 MB", downloads: 512, emoji: "📈",
    tags: ["Matplotlib", "Seaborn", "Charts"], href: "#",
  },
];

// ─── Weekly Challenges data ────────────────────────────────────────────────────
const CHALLENGES = [
  {
    id: 1,
    week: "Week 12 · 2025",
    title: "Build a Naira Currency Converter",
    desc: "Create a CLI or web app that converts Naira to major currencies using a live exchange rate API. Bonus: add historical trend charts.",
    difficulty: "Intermediate",
    tags: ["API", "CLI", "Web"],
    prize: "🏆 Featured on Python 9ja",
    deadline: "2025-03-23",
    submissions: 24,
    status: "active",
    emoji: "💱",
  },
  {
    id: 2,
    week: "Week 11 · 2025",
    title: "WhatsApp Message Analyzer",
    desc: "Parse and analyze a WhatsApp group chat export. Find the most active members, peak hours, and top emojis used.",
    difficulty: "Beginner",
    tags: ["Data", "NLP", "Fun"],
    prize: "🏆 Featured on Python 9ja",
    deadline: "2025-03-16",
    submissions: 41,
    status: "closed",
    emoji: "💬",
    winner: "Emeka_dev",
  },
  {
    id: 3,
    week: "Week 10 · 2025",
    title: "Nigerian Stock Market Dashboard",
    desc: "Scrape NSE stock data and build an interactive dashboard using Streamlit or Dash.",
    difficulty: "Advanced",
    tags: ["Scraping", "Dashboard", "Finance"],
    prize: "🏆 Featured on Python 9ja",
    deadline: "2025-03-09",
    submissions: 18,
    status: "closed",
    emoji: "📉",
    winner: "PythonQueen_NG",
  },
  {
    id: 4,
    week: "Week 9 · 2025",
    title: "Yoruba ↔ English Translator Bot",
    desc: "Build a simple translation bot for Yoruba-English using Python. Use any available NLP library or free translation API.",
    difficulty: "Intermediate",
    tags: ["NLP", "Bot", "Languages"],
    prize: "🏆 Featured on Python 9ja",
    deadline: "2025-03-02",
    submissions: 33,
    status: "closed",
    emoji: "🗣️",
    winner: "CodeByAdeola",
  },
];

const DIFFICULTY_COLORS = {
  Beginner:     "bg-emerald-50 text-emerald-700 border-emerald-100",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-100",
  Advanced:     "bg-red-50 text-red-600 border-red-100",
};

function daysLeft(deadline) {
  const diff = new Date(deadline) - new Date();
  const days = Math.ceil(diff / 86400000);
  if (days < 0) return null;
  if (days === 0) return "Last day!";
  return `${days} day${days !== 1 ? "s" : ""} left`;
}

// ─── Resource Card ─────────────────────────────────────────────────────────────
function ResourceCard({ r, index }) {
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div
      className="resource-card group bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 hover:border-emerald-200 hover:shadow-lg transition-all duration-200"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="flex items-start justify-between">
        <div className="text-4xl">{r.emoji}</div>
        <span className={`text-xs font-bold px-2 py-1 rounded-lg border ${
          r.type === "PDF"      ? "bg-red-50 text-red-600 border-red-100" :
          r.type === "ZIP"      ? "bg-blue-50 text-blue-600 border-blue-100" :
          r.type === "Notebook" ? "bg-orange-50 text-orange-600 border-orange-100" :
          "bg-gray-50 text-gray-600 border-gray-100"
        }`}>
          {r.type}
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1 group-hover:text-emerald-700 transition-colors">
          {r.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {r.tags.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 font-medium">#{t}</span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-gray-50">
        <span>📁 {r.size}</span>
        <span>⬇️ {r.downloads.toLocaleString()} downloads</span>
      </div>

      <a
        href={r.href}
        onClick={() => setDownloaded(true)}
        className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
          downloaded
            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
            : "btn-green text-white shadow-sm"
        }`}
      >
        {downloaded ? "✅ Downloaded!" : "⬇️ Download Free"}
      </a>
    </div>
  );
}

// ─── Challenge Card ────────────────────────────────────────────────────────────
function ChallengeCard({ c, index }) {
  const remaining = daysLeft(c.deadline);
  return (
    <div
      className="challenge-card bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-lg"
      style={{
        animationDelay: `${index * 0.08}s`,
        borderColor: c.status === "active" ? "#a7f3d0" : "#f3f4f6"
      }}
    >
      {/* Status bar */}
      {c.status === "active" && (
        <div className="h-1 w-full green-gradient" />
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{c.week}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl">{c.emoji}</span>
              <h3 className="font-display text-lg text-gray-900 leading-tight">{c.title}</h3>
            </div>
          </div>
          {c.status === "active" ? (
            <span className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          ) : (
            <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">Closed</span>
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs px-2.5 py-1 rounded-lg border font-semibold ${DIFFICULTY_COLORS[c.difficulty]}`}>
            {c.difficulty}
          </span>
          {c.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 border border-gray-100">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>👥 {c.submissions} submissions</span>
          {remaining && c.status === "active" && (
            <span className="text-amber-600 font-semibold">⏰ {remaining}</span>
          )}
          {c.winner && (
            <span className="text-emerald-600 font-semibold">🏆 Winner: @{c.winner}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-xs text-gray-400">{c.prize}</span>
          {c.status === "active" ? (
            <Link
              href="/register"
              className="btn-green px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm"
            >
              Submit Solution →
            </Link>
          ) : (
            <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-500 text-xs font-semibold border border-gray-100 hover:bg-gray-100 transition-colors">
              View Solutions
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch]                 = useState("");
  const [tab, setTab]                       = useState("resources"); // "resources" | "challenges"
  const [isLoggedIn, setIsLoggedIn]         = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const filtered = RESOURCES.filter(r => {
    const matchCat  = activeCategory === "All" || r.category === activeCategory;
    const matchSearch = !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const activeChallenge  = CHALLENGES.find(c => c.status === "active");
  const pastChallenges   = CHALLENGES.filter(c => c.status === "closed");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Hero ── */}
      <div className="green-gradient relative overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-40" />
        {/* Glow orbs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-green-900/30 blur-2xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-5">
            <span>📚</span> Community Learning Hub
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3 leading-tight">
            Resources & Weekly Challenges
          </h1>
          <p className="text-emerald-100 text-base max-w-xl mx-auto mb-8">
            Free downloadable resources curated by the Python 9ja community, plus weekly coding challenges to sharpen your skills.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            {[
              { icon: "📄", val: `${RESOURCES.length}+`, label: "Free Resources" },
              { icon: "⬇️", val: "8,600+",              label: "Total Downloads" },
              { icon: "🏆", val: `${CHALLENGES.length}+`, label: "Challenges Posted" },
              { icon: "👥", val: "100+",                  label: "Submissions" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2">
                <span>{s.icon}</span>
                <span className="font-display font-bold text-white text-lg">{s.val}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 py-2">
          {[
            { key: "resources",  label: "📚 Resources",        count: RESOURCES.length },
            { key: "challenges", label: "🏆 Weekly Challenges", count: CHALLENGES.filter(c=>c.status==="active").length },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t.key
                  ? "btn-green text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.label}
              {t.count > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  tab === t.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* ═══════════════ RESOURCES TAB ═══════════════ */}
        {tab === "resources" && (
          <div className="fade-up">
            {/* Search + filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search resources, tags…"
                  className="search-focus w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400"
                />
              </div>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:border-red-300 hover:text-red-500 transition-colors font-medium"
                >
                  ✕ Clear
                </button>
              )}
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-chip px-4 py-2 rounded-xl text-sm border font-semibold transition-all ${
                    activeCategory === cat ? "active" : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-400 mb-4">
              {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
              {search && ` matching "${search}"`}
            </p>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-2xl text-gray-800 mb-2">No resources found</h3>
                <p className="text-gray-400 text-sm">Try a different category or search term</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((r, i) => <ResourceCard key={r.id} r={r} index={i} />)}
              </div>
            )}

            {/* Contribute CTA */}
            <div className="mt-14 rounded-2xl overflow-hidden relative">
              <div className="green-gradient p-8 sm:p-10 text-center relative z-10">
                <div className="absolute inset-0 pattern-dots opacity-30" />
                <div className="relative">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-display text-2xl text-white mb-2">Have a Resource to Share?</h3>
                  <p className="text-emerald-100 text-sm mb-6 max-w-sm mx-auto">
                    Help the community grow. Submit your cheatsheets, guides, or project templates and get credited.
                  </p>
                  {isLoggedIn ? (
                    <Link href="/resources/submit" className="inline-block bg-white text-emerald-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-colors shadow-md">
                      Submit a Resource →
                    </Link>
                  ) : (
                    <Link href="/register" className="inline-block bg-white text-emerald-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-colors shadow-md">
                      Join to Contribute →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════ CHALLENGES TAB ═══════════════ */}
        {tab === "challenges" && (
          <div className="fade-up">

            {/* Active challenge spotlight */}
            {activeChallenge && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    CURRENT CHALLENGE
                  </div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="green-gradient rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{activeChallenge.week}</span>
                        <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mt-1 flex items-center gap-3">
                          <span className="text-3xl">{activeChallenge.emoji}</span>
                          {activeChallenge.title}
                        </h2>
                      </div>
                      {daysLeft(activeChallenge.deadline) && (
                        <div className="flex-shrink-0 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-center">
                          <p className="text-amber-700 font-bold text-lg">{daysLeft(activeChallenge.deadline)}</p>
                          <p className="text-amber-500 text-xs">to submit</p>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-5 max-w-2xl">{activeChallenge.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className={`text-xs px-3 py-1.5 rounded-lg border font-semibold ${DIFFICULTY_COLORS[activeChallenge.difficulty]}`}>
                        {activeChallenge.difficulty}
                      </span>
                      {activeChallenge.tags.map(t => (
                        <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 border border-gray-100">{t}</span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-5 text-sm text-gray-400">
                        <span>👥 {activeChallenge.submissions} submissions so far</span>
                        <span>{activeChallenge.prize}</span>
                      </div>
                      {isLoggedIn ? (
                        <Link href={`/challenges/${activeChallenge.id}/submit`} className="btn-green px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md">
                          Submit Your Solution 🚀
                        </Link>
                      ) : (
                        <Link href="/register" className="btn-green px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md">
                          Join to Participate →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* How it works */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
              <h3 className="font-display text-xl text-gray-900 mb-5">How Weekly Challenges Work</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { step: "01", icon: "📅", title: "Every Monday",   desc: "A new Python challenge drops at 8 AM WAT" },
                  { step: "02", icon: "💻", title: "Build It",       desc: "Write your solution in Python — any library allowed" },
                  { step: "03", icon: "📤", title: "Submit by Sunday", desc: "Push to GitHub and submit your repo link" },
                  { step: "04", icon: "🏆", title: "Get Featured",   desc: "Best solutions are showcased in our WhatsApp group" },
                ].map(s => (
                  <div key={s.step} className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-gray-50">
                    <span className="text-xs font-bold text-gray-300 font-display">{s.step}</span>
                    <span className="text-3xl">{s.icon}</span>
                    <p className="font-semibold text-sm text-gray-900">{s.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Past challenges */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h3 className="font-display text-xl text-gray-900">Past Challenges</h3>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">{pastChallenges.length} completed</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastChallenges.map((c, i) => <ChallengeCard key={c.id} c={c} index={i} />)}
              </div>
            </div>

            {/* Suggest a challenge */}
            <div className="mt-12 bg-white rounded-2xl border border-dashed border-emerald-300 p-8 text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-display text-xl text-gray-900 mb-2">Got a Challenge Idea?</h3>
              <p className="text-gray-500 text-sm mb-5 max-w-sm mx-auto">
                We pick community-suggested challenges every week. Drop your idea in our WhatsApp group or submit it here.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43"
                  className="btn-green px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-sm"
                >
                  💬 Suggest on WhatsApp
                </a>
                {isLoggedIn && (
                  <Link href="/challenges/suggest" className="px-6 py-3 rounded-xl border border-emerald-300 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-colors">
                    📝 Submit Idea Here
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
