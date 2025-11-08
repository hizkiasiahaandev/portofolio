"use client"

import { Github, Linkedin, Mail, Twitter, ArrowUp, Coffee, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const offset = 80
    const top = element.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-900 hover:text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
    { icon: Mail, href: "#", label: "Email", color: "hover:bg-violet-600 hover:text-white" },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 antialiased">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 cursor-pointer border-none bg-transparent p-0"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shadow-md shadow-slate-300/60 group-hover:shadow-lg group-hover:shadow-slate-400/70 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-[0.18em]">
                Hizkia · Portfolio
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Full Stack Developer &amp; UI Designer
              </p>
            </div>
          </button>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-300 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to top
              </button>
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            © {currentYear} Hizkia Siahaan · All rights reserved
          </p>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            Dibangun dengan
            <span className="text-emerald-600 font-bold">Tailwind CSS</span>
            <Coffee className="w-3.5 h-3.5 text-slate-700" />
            dan banyak kopi
          </p>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            Crafted with
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
            and passion
          </p>
        </div>
      </div>
    </footer>
  )
}
