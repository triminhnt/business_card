"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import QRCode from "react-qr-code";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    label: "Phone",
    value: "(+84) 909.096.843",
    href: "tel:+84909096843",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "mc.minhtringuyen@gmail.com",
    href: "mailto:mc.minhtringuyen@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "581/5 Bà Hạt, P. Diên Hồng, TP. Hồ Chí Minh",
    href: "https://maps.google.com/?q=581/5+Ba+Hat+Ho+Chi+Minh",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minh-tri-hamonvil",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Hamonvil",
    "ORG:Hamonvil",
    "TEL;TYPE=CELL:+84909096843",
    "EMAIL:mc.minhtringuyen@gmail.com",
    "ADR;TYPE=WORK:;;581/5 Bà Hạt;TP. Hồ Chí Minh;;;Vietnam",
    "URL:https://www.linkedin.com/in/minh-tri-hamonvil",
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Hamonvil.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

export default function BusinessCard() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0f1a]">
      <ParticleBackground />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm mx-4 sm:mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">

          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#5DC85A] to-[#2AC6BE]" />

          <div className="px-8 py-10 flex flex-col items-center gap-6">

            {/* Logo + Identity */}
            <div className="animate-fade-in flex flex-col items-center gap-4">
              <div className="relative flex items-center justify-center
                drop-shadow-[0_0_18px_rgba(45,198,190,0.45)]">
                <Image
                  src="/logo/Logo 164x76.png"
                  alt="Hamonvil Logo"
                  width={164}
                  height={76}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Brand + Name block */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
                    StreamIQ
                  </span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
                    Hamonvil
                  </span>
                </div>

                <h1 className="text-xl font-semibold tracking-wide text-white">
                  Nguyễn Minh Trí
                </h1>

                <p className="text-sm font-medium text-[#2AC6BE]">
                  Founder &amp; AI/Data Lead
                </p>

                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap justify-center">
                  {["Data Intelligence", "Agentic AI", "ERP · Logistics"].map((tag, i) => (
                    <span key={tag}>
                      <span className="text-[11px] text-white/45 tracking-wide">{tag}</span>
                      {i < 2 && <span className="ml-1.5 text-white/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slogan */}
              <p className="text-center text-[10px] sm:text-xs font-light tracking-widest text-[#2AC6BE]/60 uppercase">
                Where Data Thinks, Business Wins.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2AC6BE]/40 to-transparent" />

            {/* Contact Info */}
            <div className="w-full flex flex-col gap-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Address" ? "_blank" : undefined}
                  rel={c.label === "Address" ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5
                    hover:bg-white/5 transition-all duration-200"
                >
                  <span className="mt-0.5 shrink-0 text-[#5DC85A] group-hover:text-[#2AC6BE] transition-colors duration-200">
                    {c.icon}
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200 leading-snug">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2AC6BE]/40 to-transparent" />

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5
                    flex items-center justify-center text-[#2AC6BE]
                    hover:bg-[#2AC6BE]/20 hover:border-[#2AC6BE]/50 hover:scale-110
                    transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* QR Code — LinkedIn */}
            <a
              href="https://www.linkedin.com/in/minh-tri-hamonvil"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5"
              aria-label="Open LinkedIn profile"
            >
              <div className="p-2.5 rounded-xl bg-white shadow-md shadow-black/30
                ring-1 ring-white/10
                group-hover:ring-[#2AC6BE]/60 group-hover:shadow-[#2AC6BE]/20
                transition-all duration-300">
                <QRCode
                  value="https://www.linkedin.com/in/minh-tri-hamonvil"
                  size={96}
                  fgColor="#2AC6BE"
                  bgColor="#ffffff"
                  level="M"
                />
              </div>
              <span className="flex items-center gap-1.5 text-xs text-white/45
                group-hover:text-[#2AC6BE]/80 transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Scan to connect on LinkedIn
              </span>
            </a>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadVCard}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 px-4
                  bg-gradient-to-r from-[#5DC85A] to-[#2AC6BE]
                  text-white text-sm font-semibold tracking-wide
                  hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-200 shadow-lg shadow-[#2AC6BE]/20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Lưu Danh Bạ
              </button>

              <a
                href="mailto:mc.minhtringuyen@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 px-4
                  border border-white/20 bg-white/5
                  text-white text-sm font-semibold tracking-wide
                  hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Gửi Email
              </a>
            </div>

          </div>

          {/* Bottom gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#2AC6BE] to-[#5DC85A]" />
        </div>
      </div>
    </main>
  );
}
