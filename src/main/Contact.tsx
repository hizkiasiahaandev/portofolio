"use client"

import { Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Contact() {
    return (
        <section id="contact" className="bg-slate-950 px-4 py-16">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-wrap items-start justify-between gap-8">
                    <div className="space-y-6 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200 antialiased">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px] shadow-emerald-400/30 animate-pulse"></span>
                            <span>Hubungi Saya</span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[0.65rem] uppercase tracking-wide text-emerald-300 border border-slate-700 font-bold">
                                Available
                            </span>
                        </div>


                        <div className="space-y-3">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
                                Mari Wujudkan Ide Anda Bersama
                            </h2>
                            <p className="text-base text-slate-300 leading-relaxed">
                                Saya siap membantu mewujudkan project digital Anda. Dari{" "}
                                <span className="text-emerald-300 font-semibold">website interaktif</span>,{" "}
                                <span className="text-emerald-300 font-semibold">aplikasi web modern</span>, hingga{" "}
                                <span className="text-emerald-300 font-semibold">visualisasi data</span> yang menarik.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="rounded-lg border border-slate-700 bg-linear-to-br from-slate-900/90 to-slate-900/50 p-5 space-y-3 hover:border-emerald-500/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                                        <Mail className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Profesional</p>
                                        <p className="text-sm text-slate-200 font-medium mt-0.5">hello@yourdomain.com</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    Respon dalam 24 jam (hari kerja)
                                </p>
                            </div>

                            <div className="rounded-lg border border-slate-700 bg-linear-to-br from-slate-900/90 to-slate-900/50 p-5 space-y-3 hover:border-emerald-500/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                                        <MessageCircle className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp</p>
                                        <p className="text-sm text-slate-200 font-medium mt-0.5">+62 812-3456-7890</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    Fast response untuk diskusi cepat
                                </p>
                            </div>

                            <div className="rounded-lg border border-slate-700 bg-linear-to-br from-slate-900/90 to-slate-900/50 p-5 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 border border-slate-700">
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lokasi</p>
                                        <p className="text-sm text-slate-200 font-medium mt-0.5">Medan, Indonesia</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400">Terbuka untuk remote collaboration</p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-4">
                            <p className="text-xs text-slate-400 leading-relaxed">
                                💡 <span className="font-semibold text-slate-300">Quick Tip:</span> Jelaskan project Anda sedetail mungkin agar saya bisa memberikan estimasi dan solusi yang tepat.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-lg rounded-lg border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-sm">
                        <div className="space-y-2 mb-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">Formulir Kontak</p>
                            <h3 className="text-xl font-bold text-slate-50">Kirim Pesan Sekarang</h3>
                            <p className="text-sm text-slate-400">Isi formulir di bawah dan saya akan segera merespons</p>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-semibold text-slate-200">
                                    Nama Lengkap <span className="text-emerald-400">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Masukkan nama lengkap Anda"
                                    className="w-full rounded-lg border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-slate-200">
                                    Alamat Email <span className="text-emerald-400">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="w-full rounded-lg border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-semibold text-slate-200">
                                    Nomor WhatsApp
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+62 812-xxxx-xxxx"
                                    className="w-full rounded-lg border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="type" className="text-sm font-semibold text-slate-200">
                                    Jenis Keperluan <span className="text-emerald-400">*</span>
                                </Label>
                                <Select>
                                    <SelectTrigger
                                        id="type"
                                        className="w-full rounded-lg border-slate-700 bg-slate-900/70 text-slate-100 focus:ring-emerald-400 focus:border-emerald-400 h-11"
                                    >
                                        <SelectValue placeholder="Pilih jenis keperluan" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-100">
                                        <SelectItem value="website">Pembuatan Website</SelectItem>
                                        <SelectItem value="webapp">Aplikasi Web</SelectItem>
                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                        <SelectItem value="data">Data Visualization</SelectItem>
                                        <SelectItem value="internship">Internship Opportunity</SelectItem>
                                        <SelectItem value="collaboration">Kolaborasi Project</SelectItem>
                                        <SelectItem value="consultation">Konsultasi</SelectItem>
                                        <SelectItem value="other">Lainnya</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-semibold text-slate-200">
                                    Pesan Anda <span className="text-emerald-400">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Ceritakan detail project atau keperluan Anda. Semakin detail, semakin baik!"
                                    className="w-full rounded-lg border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 resize-none"
                                />
                                <p className="text-xs text-slate-500">Minimal 20 karakter</p>
                            </div>

                            <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-700 text-emerald-500 focus:ring-2 focus:ring-emerald-400"
                                />
                                <label htmlFor="terms" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                                    Saya setuju untuk dihubungi melalui email atau WhatsApp terkait pesan ini
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button
                                    className="flex-1 h-12 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Kirim Pesan
                                </Button>

                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all duration-300 hover:border-emerald-500/50"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
                                    Chat WA
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                        <p className="text-slate-400">
                            <span className="inline-flex items-center gap-2">
                                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Biasanya merespons dalam 24 jam
                            </span>
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>Senin - Jumat: 09:00 - 18:00 WIB</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">Sabtu: 10:00 - 15:00 WIB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}