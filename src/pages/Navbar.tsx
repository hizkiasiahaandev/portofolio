"use client"

import { useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Menu,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Sparkles,
  ChevronRight,
  Code2,
  Briefcase,
  FolderKanban,
  MessageSquareText,
  User,
  Heart,
  Coffee,
  Zap,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type MenuId = "about" | "skills" | "experience" | "projects" | "testimonials"

type MenuItem = {
  id: MenuId
  label: string
  subtitle: string
  icon: LucideIcon
}

type SocialLink = {
  icon: LucideIcon
  href: string
  label: string
  color: string
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuId>("about")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const menuItems: MenuItem[] = [
    { id: "about", label: "About", subtitle: "Get to know me better", icon: User },
    { id: "skills", label: "Skills", subtitle: "My technical expertise", icon: Code2 },
    { id: "experience", label: "Experience", subtitle: "Professional journey", icon: Briefcase },
    { id: "projects", label: "Projects", subtitle: "Featured work & case studies", icon: FolderKanban },
    { id: "testimonials", label: "Testimonials", subtitle: "What people say about me", icon: MessageSquareText },
  ]

  const socialLinks: SocialLink[] = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-800" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Mail, href: "#", label: "Email", color: "hover:bg-violet-600" },
  ]

  const handleMenuClick = (id: MenuId) => {
    setActiveMenu(id)
    setIsOpen(false)
    scrollToSection(id)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 antialiased ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200" : "bg-white"
        
      }`}
  
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="shrink-0 group cursor-pointer border-none bg-transparent p-0"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-300/50 group-hover:shadow-xl group-hover:shadow-slate-400/60 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-md animate-pulse" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors duration-300">
                  Hizkia Siahaan
                </span>
                <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-emerald-600" />
                  Full Stack Developer &amp; UI Designer
                </span>
              </div>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`group relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeMenu === item.id
                    ? "text-white bg-slate-900 shadow-lg shadow-slate-300/50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.label}
                  {activeMenu === item.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group ml-3 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <Zap className="w-4 h-4 group-hover:rotate-12 group-hover:text-yellow-400 transition-all duration-300" />
            </button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2.5 rounded-lg text-slate-700 transition-all duration-300 hover:shadow-md active:scale-95">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[360px] bg-white p-0 border-l border-slate-200">
                <div className="flex flex-col h-full">
                  <div className="px-6 py-6 border-b border-slate-100 bg-slate-50">
                    <div className="flex items-start gap-3 mb-5">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-300/50">
                          <span className="text-white font-bold text-2xl">H</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h2 className="text-xl font-bold text-slate-900 mb-0.5">Hizkia Siahaan</h2>
                        <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5 mb-2">
                          <Code2 className="w-3 h-3 text-emerald-600" />
                          Full Stack Developer
                        </p>
                        <div className="flex items-center gap-1.5">
                          <div className="px-2 py-1 bg-emerald-100 rounded-md">
                            <p className="text-xs font-bold text-emerald-700">Available</p>
                          </div>
                          <div className="px-2 py-1 bg-slate-100 rounded-md">
                            <p className="text-xs font-semibold text-slate-700">Remote</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>

                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="flex items-center justify-between px-2 mb-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Navigation
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-xs text-slate-500 font-medium">Menu</p>
                      </div>
                    </div>
                    <nav className="space-y-2">
                      {menuItems.map((item) => {
                        const Icon = item.icon
                        const isActive = activeMenu === item.id
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleMenuClick(item.id)}
                            className={`group w-full text-left px-4 py-4 rounded-lg transition-all duration-300 ${
                              isActive
                                ? "bg-slate-900 text-white shadow-xl shadow-slate-300/50 scale-[1.02]"
                                : "text-slate-700 hover:bg-slate-50 hover:shadow-md active:scale-95"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2.5 rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? "bg-white/10 backdrop-blur-sm"
                                    : "bg-slate-100 group-hover:bg-slate-200"
                                }`}
                              >
                                <Icon
                                  className={`w-5 h-5 ${
                                    isActive ? "text-white" : "text-slate-700"
                                  }`}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-0.5">
                                  <span className="font-bold text-base">{item.label}</span>
                                  <ChevronRight
                                    className={`w-5 h-5 transition-all duration-300 ${
                                      isActive
                                        ? "translate-x-1 text-emerald-400"
                                        : "text-slate-400"
                                    }`}
                                  />
                                </div>
                                <span
                                  className={`text-xs block ${
                                    isActive ? "text-slate-300" : "text-slate-500"
                                  }`}
                                >
                                  {item.subtitle}
                                </span>
                              </div>
                            </div>
                          </button>
                        )
                      })}

                      <button
                        type="button"
                        onClick={() => {
                          scrollToSection("contact")
                          setIsOpen(false)
                        }}
                        className="group w-full mt-4 px-4 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-400/60 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Coffee className="w-5 h-5" />
                          Hire Me Now
                          <Zap className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                      </button>
                    </nav>
                  </div>

                  <div className="px-6 py-6 border-t border-slate-100 bg-slate-50">
                    <div className="mb-4">
                      <p className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        Let&apos;s connect!
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                      </p>
                      <p className="text-xs text-slate-600 font-medium">
                        Follow me on social media
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2.5 mb-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className={`group relative flex items-center justify-center p-4 bg-white rounded-lg text-slate-700 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${social.color} hover:text-white active:scale-95 border border-slate-100`}
                        >
                          <social.icon className="w-5 h-5 relative z-10" />
                        </a>
                      ))}
                    </div>
                    <div className="p-4 rounded-lg text-center">
                      <p className="text-xs text-slate-600 font-medium">
                        © 2025 Hizkia Siahaan
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Crafted with love &amp; coffee ☕
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
