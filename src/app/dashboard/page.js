"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/lib/components"
// ── Mock data ─────────────────────────────────────────────────────────────────
const MOCK_USER = { name: "Awwal", username: "awwal_dev", avatar: null };

const MOCK_POSTS = [
  { id: 1, author: "Chidi Okonkwo", username: "chidi_py", avatar: "🧑🏾‍💻", time: "2m ago", title: "How I built a FastAPI backend that handles 50k requests/day on a ₦5k VPS", likes: 48, comments: 12, tags: ["FastAPI", "DevOps"] },
  { id: 2, author: "Amaka Eze", username: "amaka_codes", avatar: "👩🏽‍💻", time: "1h ago", title: "Django ORM vs SQLAlchemy — which should Nigerian devs learn first?", likes: 31, comments: 27, tags: ["Django", "SQLAlchemy"] },
  { id: 3, author: "Tunde Adeyemi", username: "tunde_ml", avatar: "👨🏿‍💻", time: "3h ago", title: "Getting started with Machine Learning in Python — free resources that actually work", likes: 94, comments: 41, tags: ["ML", "Beginner"] },
  { id: 4, author: "Ngozi Obi", username: "ngozi_dev", avatar: "👩🏾‍💻", time: "5h ago", title: "Web scraping Nigerian news sites with BeautifulSoup — a practical guide", likes: 22, comments: 8, tags: ["Scraping", "BeautifulSoup"] },
];

const MOCK_JOBS = [
  { id: 1, role: "Python Backend Engineer", company: "Paystack", location: "Lagos / Remote", type: "Full-time", salary: "₦800k – ₦1.2M/mo", posted: "Today", tags: ["Django", "PostgreSQL"] },
  { id: 2, role: "Data Engineer", company: "Flutterwave", location: "Remote", type: "Full-time", salary: "₦600k – ₦900k/mo", posted: "Yesterday", tags: ["Python", "Airflow", "GCP"] },
  { id: 3, role: "ML Engineer (Contract)", company: "Andela", location: "Remote", type: "Contract", salary: "$50–80/hr", posted: "2d ago", tags: ["PyTorch", "MLOps"] },
  { id: 4, role: "Python Automation Dev", company: "Konga", location: "Lagos", type: "Full-time", salary: "₦400k – ₦600k/mo", posted: "3d ago", tags: ["Selenium", "FastAPI"] },
];

const MOCK_NEWS = [
  { id: 1, source: "TechCabal", time: "1h ago", headline: "Nigerian fintech startups are betting big on Python microservices in 2025", category: "Fintech" },
  { id: 2, source: "Techpoint", time: "4h ago", headline: "Andela expands remote Python engineer placements across West Africa", category: "Jobs" },
  { id: 3, source: "TechCabal", time: "8h ago", headline: "How Lagos-based Sudo Africa rebuilt their core with FastAPI", category: "Engineering" },
  { id: 4, source: "Techpoint", time: "1d ago", headline: "Python ranked #1 most in-demand language in Nigerian job market Q1 2025", category: "Trends" },
];

const MOCK_EVENTS = [
  { id: 1, title: "Lagos Python Meetup #14", date: "Sat, Mar 15", time: "2:00 PM", location: "Co-Creation Hub, Yaba", attendees: 87, type: "In-person" },
  { id: 2, title: "Intro to FastAPI — Live Workshop", date: "Wed, Mar 19", time: "6:00 PM", location: "Online (Zoom)", attendees: 214, type: "Online" },
  { id: 3, title: "Python for Data Science Bootcamp", date: "Sat, Mar 22", time: "10:00 AM", location: "Online (Google Meet)", attendees: 156, type: "Online" },
];

// ── Nav items ─────────────────────────────────────────────────────────────────
const NAV = [
  { label: "Home", icon: "⌂", href: "/dashboard", active: true },
  { label: "Community", icon: "💬", href: "/dashboard/community" },
  { label: "Jobs", icon: "💼", href: "/dashboard/jobs" },
  { label: "News", icon: "📰", href: "/dashboard/news" },
  { label: "Events", icon: "📅", href: "/dashboard/events" },
  { label: "Projects", icon: "🚀", href: "/dashboard/projects" },
  { label: "Mentorship", icon: "🤝", href: "/dashboard/mentorship" },
];

// ── Quick actions ─────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { label: "Start a Discussion", icon: "✍️", href: "/dashboard/community/new", color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" },
  { label: "Browse Jobs", icon: "💼", href: "/dashboard/jobs", color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" },
  { label: "Share a Project", icon: "🚀", href: "/dashboard/projects/new", color: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100" },
  { label: "Find a Mentor", icon: "🤝", href: "/dashboard/mentorship", color: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("feed"); // "feed" | "jobs"

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-[#f7f8f5] font-sans flex">

      {/* ── Sidebar ── */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100
        flex flex-col transition-transform duration-300 shadow-sm
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm">
              Py
            </div>
            <span className="font-display font-bold text-gray-900 text-base">
              Python<span className="text-emerald-500">9ja</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>

        {/* User pill */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-50">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {MOCK_USER.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{MOCK_USER.name}</p>
              <p className="text-xs text-emerald-600 truncate">@{MOCK_USER.username}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        {/*<nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        //   {NAV.map((item) => (
        //     <Link
        //       key={item.label}
        //       href={item.href}
        //       className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
        //         item.active
        //           ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
        //           : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        //       }`}
        //     >
        //       <span className="text-base">{item.icon}</span>
        //       {item.label}
        //     </Link>
        //   ))}
        // </nav>
        {/* Settings + logout */}
        <div className="px-3 py-4 border-t border-gray-100 space-y-0.5">
          <Link href="/dashboard/settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
            <span className="text-base">⚙️</span> Settings
          </Link>
          <button
            onClick={() => { localStorage.clear(); window.location.href = "/account/signin"; }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
          >
            <span className="text-base">🚪</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-display text-xl font-bold text-gray-900 leading-tight">
                Good morning, {MOCK_USER.name} 👋
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Here's what's happening in the Python 9ja community</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-64">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input placeholder="Search discussions, jobs…" className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full" />
          </div>

          {/* Notification bell */}
          <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
          </button>
        </header>

        {/* Page body */}
        <main className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto">

          {/* Quick actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
            {QUICK_ACTIONS.map((a) => (
              <Link key={a.label} href={a.href}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${a.color}`}>
                <span className="text-lg">{a.icon}</span>
                <span className="leading-tight">{a.label}</span>
              </Link>
            ))}
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* ── Left: Feed + Jobs (2/3) ── */}
            <div className="xl:col-span-2 space-y-6">

              {/* Tab toggle */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
                {["feed", "jobs"].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                          className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                            activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                          }`}>
                    {tab === "feed" ? "💬 Community" : "💼 Jobs"}
                  </button>
                ))}
              </div>

              {/* Community Feed */}
              {activeTab === "feed" && (
                <div className="space-y-3">
                  {MOCK_POSTS.map((post) => (
                    <article key={post.id}
                             className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-200 hover:shadow-sm transition-all group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-lg flex-shrink-0">
                          {post.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-900">{post.author}</span>
                            <span className="text-xs text-gray-400">@{post.username}</span>
                            <span className="text-xs text-gray-300">·</span>
                            <span className="text-xs text-gray-400">{post.time}</span>
                          </div>
                          <h3 className="text-sm font-medium text-gray-800 leading-snug group-hover:text-emerald-700 transition-colors mb-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                              {post.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="ml-auto flex items-center gap-3 text-xs text-gray-400">
                              <span>❤️ {post.likes}</span>
                              <span>💬 {post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                  <Link href="/dashboard/community"
                        className="block text-center py-3 text-sm text-emerald-600 font-semibold hover:underline">
                    View all discussions →
                  </Link>
                </div>
              )}

              {/* Jobs Feed */}
              {activeTab === "jobs" && (
                <div className="space-y-3">
                  {MOCK_JOBS.map((job) => (
                    <div key={job.id}
                         className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-200 hover:shadow-sm transition-all group cursor-pointer">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-sm text-gray-500">{job.company} · {job.location}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ${
                          job.type === "Full-time"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {job.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-emerald-700 font-semibold">{job.salary}</span>
                          <span className="text-gray-400">{job.posted}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link href="/dashboard/jobs"
                        className="block text-center py-3 text-sm text-emerald-600 font-semibold hover:underline">
                    View all jobs →
                  </Link>
                </div>
              )}
            </div>

            {/* ── Right: News + Events (1/3) ── */}
            <div className="space-y-6">

              {/* Tech News */}
              <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-display font-bold text-gray-900 text-sm">📰 Tech News</h2>
                  <Link href="/dashboard/news" className="text-xs text-emerald-600 font-semibold hover:underline">
                    All news
                  </Link>
                </div>
                <div className="divide-y divide-gray-100">
                  {MOCK_NEWS.map((item) => (
                    <div key={item.id} className="px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-snug group-hover:text-emerald-700 transition-colors font-medium">
                        {item.headline}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{item.source}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-display font-bold text-gray-900 text-sm">📅 Upcoming Events</h2>
                  <Link href="/dashboard/events" className="text-xs text-emerald-600 font-semibold hover:underline">
                    All events
                  </Link>
                </div>
                <div className="divide-y divide-gray-100">
                  {MOCK_EVENTS.map((event) => (
                    <div key={event.id} className="px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 text-center">
                          <div className="text-xs font-bold text-emerald-600 leading-none">
                            {event.date.split(",")[0]}
                          </div>
                          <div className="text-lg font-black text-gray-900 leading-tight">
                            {event.date.split(" ")[1]}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-400 truncate">{event.location}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                              event.type === "Online"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-orange-50 text-orange-600"
                            }`}>
                              {event.type}
                            </span>
                            <span className="text-xs text-gray-400">👥 {event.attendees}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-gray-100">
                  <button className="w-full text-center text-xs font-semibold text-emerald-600 hover:underline py-1">
                    + Register for an event
                  </button>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </div>
    </ProtectedRoute>
  );
}
