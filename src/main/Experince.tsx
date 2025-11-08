"use client"

import {
    Briefcase,
    Code2,
    Sparkles,
    Link as LinkIcon,
    GraduationCap,
    Database,
    Brain,
    Users,
    FlaskConical,
    BookOpen,
    Laptop,
    MessagesSquare,
    Clock,
    Sprout,
    ArrowRight,
} from "lucide-react"

export default function Experience() {
    return (
        <section id="experience" className=" bg-slate-950 px-4 py-16">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse"></span>
                            <span>Experience</span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
                                Real &amp; Learning Journey
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                            Pengalaman yang membentuk cara saya membangun produk digital.
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Mulai dari project pribadi, kolaborasi kecil, sampai kontribusi di lingkungan kampus. Fokus saya:{" "}
                            <span className="text-emerald-300 font-medium">menerjemahkan kebutuhan sederhana</span> jadi tampilan dan
                            fitur yang jelas.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-300 max-w-xs">
                        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">Value</p>
                        <p>
                            Transparan soal progress, komunikatif, dan nggak ragu untuk tanya ketika butuh kejelasan requirement.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="space-y-6 flex-1 lg:basis-2/3">
                        <div className="relative pl-6 border-l border-slate-700/70 space-y-6">
                            <div className="relative">
                                <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]"></span>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2024 - Now</p>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/60 px-2.5 py-1 text-[0.7rem] text-emerald-200">
                                        <Briefcase className="w-3 h-3" />
                                        Freelance &amp; Personal Projects
                                    </span>
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                    Frontend Developer (Independent)
                                </h3>
                                <p className="text-xs text-slate-400 mb-3">Mini landing page, portofolio, dan UI eksperimen</p>
                                <p className="text-sm text-slate-300">
                                    Mengerjakan beberapa <span className="text-emerald-300 font-medium">mini project</span> untuk teman,
                                    komunitas kecil, atau kebutuhan pribadi: mulai dari landing page jasa sampai dashboard sederhana.
                                    Fokus di performance, struktur komponen, dan kemudahan di-maintain.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Code2 className="w-3 h-3 text-emerald-300" />
                                        React + Vite
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Sparkles className="w-3 h-3 text-cyan-300" />
                                        Tailwind UI
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <LinkIcon className="w-3 h-3 text-emerald-300" />
                                        Integration with API
                                    </span>
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-[0_0_0_4px_rgba(56,189,248,0.35)]"></span>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2023 - Now</p>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 border border-cyan-400/60 px-2.5 py-1 text-[0.7rem] text-cyan-200">
                                        <GraduationCap className="w-3 h-3" />
                                        Informatics Student
                                    </span>
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-slate-50">Project &amp; Tugas Kuliah</h3>
                                <p className="text-xs text-slate-400 mb-3">USU · Individual &amp; team-based</p>
                                <p className="text-sm text-slate-300">
                                    Menggunakan <span className="text-emerald-300 font-medium">Python, Pandas, dan tools AI</span> untuk
                                    eksplor data, membuat laporan sederhana, dan prototipe kecil. Di sisi lain, tetap membangun UI untuk
                                    tugas berbasis web.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Database className="w-3 h-3 text-emerald-300" />
                                        Python &amp; Pandas
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Brain className="w-3 h-3 text-emerald-300" />
                                        AI-assisted workflow
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Users className="w-3 h-3 text-cyan-300" />
                                        Team collaboration
                                    </span>
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-slate-500 border-2 border-slate-950 shadow-[0_0_0_4px_rgba(148,163,184,0.35)]"></span>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">2022 - 2023</p>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 border border-slate-600 px-2.5 py-1 text-[0.7rem] text-slate-200">
                                        <FlaskConical className="w-3 h-3" />
                                        Self-learning &amp; Experiments
                                    </span>
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                    Belajar Mandiri &amp; Mini Labs
                                </h3>
                                <p className="text-xs text-slate-400 mb-3">HTML, CSS, JS basic → modern stack</p>
                                <p className="text-sm text-slate-300">
                                    Mulai dari cloning UI sederhana, mencoba berbagai tutorial, sampai akhirnya nyaman dengan{" "}
                                    <span className="text-emerald-300 font-medium">React + Tailwind</span>. Fase ini yang bikin fondasi
                                    cara saya memecah UI jadi komponen.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <BookOpen className="w-3 h-3 text-cyan-300" />
                                        Tutorial &amp; Docs
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-slate-200">
                                        <Laptop className="w-3 h-3 text-emerald-300" />
                                        UI Cloning
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 w-full lg:basis-1/3 lg:max-w-sm">
                        <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3">How I Work</p>
                            <h3 className="text-lg font-semibold text-slate-50 mb-3">Kenapa enak diajak kerja bareng?</h3>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/70 text-[0.7rem] text-emerald-300">
                                        <MessagesSquare className="w-3 h-3" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-50 text-sm">Komunikasi jelas &amp; rutin</p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            Update progress, tanya kalau ada yang kurang jelas, dan terbuka untuk revisi.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/70 text-[0.7rem] text-cyan-300">
                                        <Clock className="w-3 h-3" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-50 text-sm">Deadlines realistis</p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            Lebih jujur soal waktu pengerjaan daripada asal cepat tapi hasil kurang rapi.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[0.7rem] text-slate-200">
                                        <Sprout className="w-3 h-3" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-50 text-sm">Selalu belajar</p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            Nggak keberatan belajar tools baru kalau memang dibutuhkan project.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
                                <div className="space-y-1">
                                    <p className="text-slate-400">Saat ini</p>
                                    <p className="text-slate-200">
                                        Open untuk internship, freelance kecil, atau kolaborasi produk digital.
                                    </p>
                                </div>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-[0.75rem] font-medium text-emerald-200 hover:bg-emerald-500/20 transition-colors"
                                >
                                    <span>Diskusi pengalaman &amp; project</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
