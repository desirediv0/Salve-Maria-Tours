"use client";

import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip label — hidden by default, shows on hover via group */}
      <div className="group/wa flex items-center gap-3">
        {/* Label pill */}
        <span className="pointer-events-none translate-x-2 whitespace-nowrap rounded-full border border-[#25D366]/20 bg-[#0f1e3d]/90 px-3.5 py-1.5 font-body text-xs font-semibold text-white/80 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover/wa:translate-x-0 group-hover/wa:opacity-100">
          Chat on WhatsApp
        </span>

        {/* Button */}
        <div className="relative h-14 w-14">
          {/* Ping ring */}
          <span
            className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"
            aria-hidden
          />
          {/* Outer glow ring */}
          <span
            className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366]/15 blur-sm"
            aria-hidden
          />
          <Link
            href="https://wa.me/919958815430"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <SiWhatsapp className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}