"use client"

import { Code2, Palette, Database, ArrowRight } from "lucide-react"

export default function Skills() {
    return (
        <section id="skills" className=" bg-slate-950 px-4 py-16">
            <div className="max-w-7xl w-full mx-auto space-y-10">
                <div className="flex flex-wrap items-center justify-between gap-4" data-aos="fade-down">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse"></span>
                            <span>Skills</span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
                                What I Use
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                            Skillset utama yang sering saya pakai dalam project.
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Fokus utama di <span className="text-emerald-300 font-medium">frontend modern</span>, tapi tetap nyaman
                            bekerja dengan data dan logika backend ringan untuk mendukung kebutuhan aplikasi.
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-300 max-w-xs">
                        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">Comfort Zone</p>
                        <p>
                            Building clean UI, reusable components, dan integrasi API sederhana dengan React/Vite.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6" data-aos="fade-up">

                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-50">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/60 text-emerald-300">
                                <Code2 className="w-4 h-4" />
                            </span>
                            Frontend Core
                        </div>
                        <div className="space-y-3 text-sm text-slate-300">
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>HTML / CSS / JS</span>
                                    <span className="text-slate-400">Advanced</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[90%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>React / Vite</span>
                                    <span className="text-slate-400">Advanced</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[88%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>TypeScript</span>
                                    <span className="text-slate-400">Intermediate</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[75%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-50">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/60 text-cyan-300">
                                <Palette className="w-4 h-4" />
                            </span>
                            UI &amp; Styling
                        </div>
                        <div className="space-y-3 text-sm text-slate-300">
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>Tailwind CSS</span>
                                    <span className="text-slate-400">Advanced</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[90%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>Component UI</span>
                                    <span className="text-slate-400">Intermediate</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[80%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>Responsive Design</span>
                                    <span className="text-slate-400">Advanced</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[88%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-50">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 border border-slate-600 text-slate-200">
                                <Database className="w-4 h-4" />
                            </span>
                            Data &amp; Tools
                        </div>
                        <div className="space-y-3 text-sm text-slate-300">
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>Python</span>
                                    <span className="text-slate-400">Intermediate</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[78%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>Pandas / Analisis Data</span>
                                    <span className="text-slate-400">Intermediate</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[72%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span>AI Tools &amp; Automation</span>
                                    <span className="text-slate-400">Comfortable</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div className="h-2 w-[80%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300" data-aos="fade-right">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        <span>Selalu terbuka untuk belajar stack baru jika dibutuhkan project.</span>
                    </div>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        <span>Lihat penerapan skills di project</span>
                        <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    )
}
