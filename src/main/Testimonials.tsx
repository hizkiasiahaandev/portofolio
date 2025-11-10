"use client"

import { Star, Quote, ArrowRight } from "lucide-react"

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-slate-950 px-4 py-16">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-wrap items-center justify-between gap-4" data-aos="fade-down">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200 antialiased">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_4px] shadow-cyan-400/30 animate-pulse"></span>
                            <span>Testimonials</span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-cyan-300 border border-slate-700 font-bold">
                                Feedback &amp; Collaborations
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                            Apa yang mereka rasakan saat kerja bareng saya.
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Sebagian besar project saya berawal dari circle dekat: teman, dosen, dan komunitas kecil. Berikut beberapa{" "}
                            <span className="text-emerald-300 font-medium">feedback jujur</span> dari mereka.
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-300 max-w-xs">
                        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">Disclaimer</p>
                        <p>
                            Testimoni di bawah bisa disesuaikan dengan nama asli ketika sudah ada project real dengan client.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
                    <article className="relative rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-slate-600 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm text-white font-bold">
                                    H
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-50">Teman Kampus</p>
                                    <p className="text-[0.7rem] text-slate-400">Kolaborator Project Web</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300/60 fill-amber-300/60" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            <span className="text-slate-50 font-medium">"Enak diajak kerja bareng."</span> Struktur kodenya rapi,
                            gampang diikuti, dan dia nggak keberatan bantu revisi UI beberapa kali sampai dosen puas dengan tampilan
                            akhirnya.
                        </p>
                        <p className="text-[0.7rem] text-slate-500 mt-auto">
                            Project: Tugas besar web berbasis React &amp; Tailwind.
                        </p>
                        <span className="absolute -top-2 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-500">
                            <Quote className="w-4 h-4" />
                        </span>
                    </article>

                    <article className="relative rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-slate-600 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-sm text-white font-bold">
                                    C
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-50">Client Kecil</p>
                                    <p className="text-[0.7rem] text-slate-400">Usaha Jasa Lokal</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Awalnya cuma minta <span className="text-emerald-300 font-medium">landing page sederhana</span>, tapi
                            dikasih beberapa opsi layout dan warna. Respons chat cepat dan proses revisi juga nggak ribet.
                        </p>
                        <p className="text-[0.7rem] text-slate-500 mt-auto">
                            Project: Landing page jasa dengan form kontak &amp; CTA WA.
                        </p>
                        <span className="absolute -top-2 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-500">
                            <Quote className="w-4 h-4" />
                        </span>
                    </article>

                    <article className="relative rounded-lg border border-slate-700 bg-slate-900/80 p-5 flex flex-col gap-4 hover:border-slate-600 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center text-sm text-white font-bold">
                                    D
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-50">Dosen / Pembimbing</p>
                                    <p className="text-[0.7rem] text-slate-400">Tugas Data &amp; Visual</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <Star className="w-3 h-3 text-slate-600 fill-slate-600/10" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Visualisasi data yang dibuat <span className="text-emerald-300 font-medium">jelas dan terstruktur</span>.
                            Penjelasan di laporan tertulis juga rapi, sehingga mudah menilai alur analisisnya.
                        </p>
                        <p className="text-[0.7rem] text-slate-500 mt-auto">
                            Project: Visualisasi data sederhana dengan Python &amp; chart di web.
                        </p>
                        <span className="absolute -top-2 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-500">
                            <Quote className="w-4 h-4" />
                        </span>
                    </article>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300" data-aos="fade-right">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Siap menambah testimoni baru dari project nyata berikutnya.</span>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                        <span>Mau jadi testimoni berikutnya?</span>
                        <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    )
}