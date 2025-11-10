"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Github, Linkedin, Instagram, Twitter, Code2, TrendingUp, Sparkles, Zap } from "lucide-react"

export default function Home() {
  const [typingText, setTypingText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Frontend Developer", "UI Designer", "Problem Solver"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setTypingText(
        isDeleting
          ? fullText.substring(0, typingText.length - 1)
          : fullText.substring(0, typingText.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typingText, isDeleting, loopNum, typingSpeed, roles])

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:border-emerald-400 hover:text-emerald-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:border-emerald-400 hover:text-emerald-300" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:border-emerald-400 hover:text-emerald-300" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:border-emerald-400 hover:text-emerald-300" },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 mt-15 bg-slate-950 text-slate-50 antialiased" id="home">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <section className="space-y-8" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse"></span>
            <span>Available for Internship & Projects</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
              Portfolio 2025
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-50">
              Hizkia Siahaan
              <span className="block mt-2">
                <span className="text-emerald-400 text-3xl md:text-5xl font-extrabold inline-block min-h-[1.2em]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>

              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Mahasiswa dengan ketertarikan di bidang{" "}
              <span className="text-emerald-300 font-bold">web development</span>,
              <span className="text-emerald-300 font-bold"> data</span>, dan{" "}
              <span className="text-emerald-300 font-bold">AI tools</span>.
              Fokus membuat pengalaman digital yang modern, bersih, dan fungsional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-500 text-sm sm:text-base font-bold text-slate-100 shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-slate-700 bg-slate-900/60 text-sm sm:text-base font-bold text-slate-100 hover:border-emerald-400 hover:bg-slate-900 hover:text-emerald-300 hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span>Hire Me</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </a>
          </div>


          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">Connect with me</p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </section>


        <section className="relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_top,#22c55e_0,transparent_55%),radial-gradient(circle_at_bottom,#0ea5e9_0,transparent_55%)]">
          </div>


          <div className="relative rounded-lg border border-slate-700/60 bg-slate-900/70 shadow-[0_24px_80px_rgba(15,23,42,0.85)] p-6 sm:p-8 overflow-hidden">
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">Profile Snapshot</p>
                <p className="text-lg font-bold text-slate-50 flex items-center gap-2">
                  Informatics Student
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-2 border border-emerald-400/60">
                <div className="flex flex-col leading-tight">
                  <span className="text-[0.65rem] uppercase tracking-wide text-emerald-300 font-bold">
                    Current GPA
                  </span>
                  <span className="text-sm font-bold text-emerald-100">3.85 / 4.00</span>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/90 text-slate-100 text-xs font-bold shadow-lg shadow-emerald-600/30">
                  GPA
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-5 flex flex-col gap-2 hover:border-slate-500 hover:bg-slate-900 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-400/60">
                    <Code2 className="w-4 h-4" />
                  </span>
                  Stack Utama
                </div>
                <p className="text-sm text-slate-300 font-medium">React, TypeScript, Tailwind, Python.</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-5 flex flex-col gap-2 hover:border-slate-500 hover:bg-slate-900 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-400/60">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  Fokus Belajar
                </div>
                <p className="text-sm text-slate-300 font-medium">Frontend modern, data, dan integrasi AI tools.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900/80 rounded-lg border border-slate-700">
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-semibold">Project Selesai</p>
                <p className="text-2xl font-bold text-slate-50">
                  12+<span className="text-xs text-slate-400 ms-1 font-semibold">mini & real</span>
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-semibold">Response Time</p>
                <p className="text-2xl font-bold text-slate-50">&lt; 24h</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs text-slate-200 font-bold">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open to collaboration
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
