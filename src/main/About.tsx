"use client"

import { Zap, Layers, Brain, Code2, Sparkles, Database, Bot, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-16">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse"></span>
            <span>About Me</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
              Who I Am
            </span>
          </div>


          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Mahasiswa yang serius di frontend, tapi tetap eksplor data &amp; AI.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Saya tidak hanya ingin membuat tampilan yang cantik, tetapi juga{" "}
              <span className="text-emerald-300 font-medium">fungsional</span>,
              <span className="text-emerald-300 font-medium"> ringan</span>, dan{" "}
              <span className="text-emerald-300 font-medium"> nyaman digunakan</span>. Banyak project yang saya kerjakan
              berawal dari kebutuhan sederhana: mempermudah hidup sendiri dan orang sekitar.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            <div className="inline-flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center aspect-square rounded-full bg-emerald-500/15 border border-emerald-400/60 text-emerald-300">
                <Zap className="w-3 h-3" />
              </span>
              <p>
                membangun <span className="font-medium text-slate-50">project kecil tapi nyata</span> seperti
                landing page jasa, portofolio, UI eksperimen, dan integrasi sederhana dengan API atau tools AI.
              </p>
            </div>

            <div className="inline-flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center aspect-square  justify-center rounded-full bg-cyan-500/15 border border-cyan-400/60 text-cyan-300">
                <Layers className="w-3 h-3" />
              </span>
              <p>
                Terbiasa bekerja dengan <span className="font-medium text-slate-50">React, TypeScript, dan Tailwind</span>{" "}
                untuk membuat UI yang konsisten dan mudah di-maintain.
              </p>
            </div>

            <div className="inline-flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center aspect-square rounded-full bg-slate-800 border border-slate-600 text-slate-200">
                <Brain className="w-3 h-3" />
              </span>
              <p>
                Tertarik mengeksplor <span className="font-medium text-slate-50">data dan AI</span> untuk analisis sederhana,
                automasi, dan ide-ide eksperimen ke depannya.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="space-y-1">
                <p className="text-xs text-slate-400">Project</p>
                <p className="text-xl font-semibold text-slate-50">12+</p>
                <p className="text-[0.7rem] text-slate-500">Mini &amp; real use</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400">Focus</p>
                <p className="text-xl font-semibold text-slate-50">Frontend</p>
                <p className="text-[0.7rem] text-slate-500">UI, UX, perf</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400">GPA</p>
                <p className="text-xl font-semibold text-emerald-300">3.85</p>
                <p className="text-[0.7rem] text-slate-500">Consistent effort</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tech &amp; Tools</p>
              <div className="flex flex-wrap gap-2 text-[0.7rem]">
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
                  <Code2 className="w-3 h-3 text-emerald-300" />
                  React / Vite / TS
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  Tailwind UI
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
                  <Database className="w-3 h-3 text-emerald-300" />
                  Python &amp; Pandas
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200">
                  <Bot className="w-3 h-3 text-emerald-300" />
                  AI Tools Friendly
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <p className="text-slate-400">Cara kerja</p>
                <p className="text-slate-200">Cepat adaptasi, eksplor, dan open feedback.</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-[0.75rem] font-medium text-emerald-200 hover:bg-emerald-500/20 transition-colors"
              >
                <span>Diskusi project?</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
