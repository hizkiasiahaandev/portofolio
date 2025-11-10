"use client"

import {
    Globe2,
    IdCard,
    BarChart3,
    Code2,
    Sparkles,
    Smartphone,
    PenSquare,
    Gauge,
    Github,
    ArrowUpRight,
    Database,
    LineChart,
    FlaskConical,
    CheckCircle2,
    Share2,
    ArrowRight,
} from "lucide-react"

export default function Projects() {
    return (
        <section id="projects" className="bg-slate-950 px-4 py-16">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-wrap items-center justify-between gap-4" data-aos="fade-down">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 antialiased">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse" />
                            <span>Projects</span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
                                Selected Works
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                            Beberapa project yang mencerminkan cara saya membangun UI.
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Fokus pada <span className="text-emerald-300 font-medium">real-world use case</span>: portofolio, landing
                            page, dan dashboard kecil yang bisa langsung dipakai atau dikembangkan lebih lanjut.
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-300 max-w-xs">
                        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">Note</p>
                        <p>Project di bawah ini bisa dikembangkan lagi sesuai kebutuhan bisnis atau organisasi.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                    <article className="group rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-emerald-400/80 hover:shadow-[0_18px_60px_rgba(16,185,129,0.25)] transition-all">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 text-[0.7rem] text-emerald-300">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/60">
                                    <Globe2 className="w-3.5 h-3.5" />
                                </span>
                                <span className="uppercase tracking-[0.16em]">Landing Page</span>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-slate-50">Landing Page Jasa Lokal</h3>
                            <p className="text-xs text-slate-400">
                                Halaman promosi simpel untuk usaha lokal dengan fokus ke informasi jelas, CTA yang kuat, dan load time
                                cepat.
                            </p>
                        </div>

                        <div className="space-y-2 text-[0.7rem]">
                            <p className="text-slate-400">Tech stack</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Code2 className="w-3 h-3 text-emerald-300" />
                                    React + Vite
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Sparkles className="w-3 h-3 text-cyan-300" />
                                    Tailwind CSS
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Smartphone className="w-3 h-3 text-emerald-300" />
                                    Responsive
                                </span>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-[0.75rem]">
                            <span className="inline-flex items-center gap-1 text-emerald-300">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Online demo ready
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full border text-white border-slate-700 bg-slate-900/70 hover:border-emerald-400 hover:text-emerald-300 transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white border border-slate-700 bg-slate-900/70 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                                >
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="group rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-emerald-400/80 hover:shadow-[0_18px_60px_rgba(56,189,248,0.25)] transition-all">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 text-[0.7rem] text-cyan-300">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/60">
                                    <IdCard className="w-3.5 h-3.5" />
                                </span>
                                <span className="uppercase tracking-[0.16em]">Portfolio</span>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-slate-50">Personal Portfolio v2</h3>
                            <p className="text-xs text-slate-400">
                                Portofolio modern dengan hero dinamis, section skills, experience, dan fokus ke readability di semua
                                ukuran layar.
                            </p>
                        </div>

                        <div className="space-y-2 text-[0.7rem]">
                            <p className="text-slate-400">Tech stack</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Code2 className="w-3 h-3 text-emerald-300" />
                                    HTML / Tailwind
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <PenSquare className="w-3 h-3 text-cyan-300" />
                                    Custom UI
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Gauge className="w-3 h-3 text-emerald-300" />
                                    Lightweight
                                </span>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-[0.75rem]">
                            <span className="inline-flex items-center gap-1 text-cyan-300">
                                <Share2 className="w-3.5 h-3.5" />
                                Used as main portfolio
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white border border-slate-700 bg-slate-900/70 hover:border-emerald-400 hover:text-emerald-300 transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white border border-slate-700 bg-slate-900/70 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                                >
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="group rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-emerald-400/80 hover:shadow-[0_18px_60px_rgba(148,163,184,0.25)] transition-all">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 text-[0.7rem] text-slate-200">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 border border-slate-600">
                                    <BarChart3 className="w-3.5 h-3.5" />
                                </span>
                                <span className="uppercase tracking-[0.16em]">Mini Dashboard</span>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-slate-50">Dashboard Data Sederhana</h3>
                            <p className="text-xs text-slate-400">
                                Dashboard kecil untuk menampilkan data sederhana (misalnya data kampus atau latihan dataset) dengan
                                fokus ke layout yang rapi.
                            </p>
                        </div>

                        <div className="space-y-2 text-[0.7rem]">
                            <p className="text-slate-400">Tech stack</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Code2 className="w-3 h-3 text-emerald-300" />
                                    React
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <Database className="w-3 h-3 text-emerald-300" />
                                    Dummy / API data
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                    <LineChart className="w-3 h-3 text-cyan-300" />
                                    Basic charts
                                </span>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-[0.75rem]">
                            <span className="inline-flex items-center gap-1 text-slate-300">
                                <FlaskConical className="w-3.5 h-3.5" />
                                Playground untuk eksperimen UI + data
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full border text-white border-slate-700 bg-slate-900/70 hover:border-emerald-400 hover:text-emerald-300 transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full border text-white border-slate-700 bg-slate-900/70 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                                >
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300" data-aos="fade-right">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        <span>Project lain bisa ditunjukkan saat diskusi lebih lanjut (repo private / eksperimen).</span>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        <span>Tertarik bahas project baru?</span>
                        <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    )
}
