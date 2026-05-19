"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiXMark, 
  HiChevronLeft, 
  HiChevronRight, 
  HiPlus, 
  HiMinus,
  HiArrowPath
} from "react-icons/hi2";
import { FadeUp } from "./FadeUp";

// ── Images Database with real, authentic titles & captions ──
const galleryImages = [
  {
    id: 1,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(1).jpeg",
    title: "Marian Candlelight Procession",
    caption: "Our pilgrims walking in devotion and holding candles during the beautiful evening prayer walk.",
    category: "pilgrimages",
    aspect: "aspect-[3/4]" // Portrait
  },
  {
    id: 2,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(2).jpeg",
    title: "Marian Grotto Prayer Group",
    caption: "Pilgrims gathered at the sacred grotto of Our Blessed Mother for silent reflection and shared petition.",
    category: "pilgrimages",
    aspect: "aspect-[4/3]" // Landscape
  },
  {
    id: 3,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(3).jpeg",
    title: "Vellankani Sanctuary Grotto",
    caption: "A special prayer service with our pilgrimage group in front of the Vellankani shrine.",
    category: "pilgrimages",
    aspect: "aspect-[16/9]" // Wide Landscape
  },
  {
    id: 4,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(4).jpeg",
    title: "Church Basilica Devotion",
    caption: "Our travelers posing for a beautiful group photo in front of the main church altar.",
    category: "group-tours",
    aspect: "aspect-square" // Square
  },
  {
    id: 5,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(5).jpeg",
    title: "Pilgrim Group Grotto Devotion",
    caption: "Pilgrims gathered together at St. Mary's Grotto during our spiritual journey.",
    category: "pilgrimages",
    aspect: "aspect-[3/4]" // Portrait
  },
  {
    id: 6,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(6).jpeg",
    title: "Pilgrimage Group Dinner",
    caption: "A joyful fellowship dinner celebrating shared spiritual moments and the warmth of our group travels.",
    category: "group-tours",
    aspect: "aspect-[4/3]" // Landscape
  },
  {
    id: 7,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(7).jpeg",
    title: "Basilica Tour Gathering",
    caption: "Group members posing in front of the majestic Vellankani Church Basilica.",
    category: "destinations",
    aspect: "aspect-square" // Square
  },
  {
    id: 8,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(8).jpeg",
    title: "Spiritual Tour Fellowship",
    caption: "A memorable group shot of our faith travelers with the Salve Maria Tours banner.",
    category: "group-tours",
    aspect: "aspect-[3/4]" // Portrait
  },
  {
    id: 9,
    src: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(9).jpeg",
    title: "Shrine of Devotion",
    caption: "Group gathering outside the sacred pilgrimage site, offering thanks and prayers.",
    category: "destinations",
    aspect: "aspect-[16/9]" // Wide Landscape
  }
];

const categories = [
  { id: "all", label: "All Memories" },
  { id: "pilgrimages", label: "Sacred Pilgrimages" },
  { id: "destinations", label: "Faith Destinations" },
  { id: "group-tours", label: "Group Fellowships" }
];

export function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  
  // Client mount state for Portal rendering
  const [mounted, setMounted] = useState(false);
  
  // Lightbox zoom & pan states
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const touchStartRef = useRef<number | null>(null);
  const lastTapRef = useRef<number>(0);

  // Set mount status on client load
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Filter images
  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === "all" || img.category === selectedCategory
  );

  // Reset zoom & pan when image changes
  const resetZoom = useCallback(() => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
    resetZoom();
  }, [resetZoom]);

  const nextImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % filteredImages.length);
    resetZoom();
  }, [activeIdx, filteredImages.length, resetZoom]);

  const prevImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + filteredImages.length) % filteredImages.length);
    resetZoom();
  }, [activeIdx, filteredImages.length, resetZoom]);

  // Keyboard navigation & locking scroll
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        else if (e.key === "ArrowLeft") prevImage();
        else if (e.key === "ArrowRight") nextImage();
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeIdx, closeLightbox, nextImage, prevImage]);

  // Zoom control triggers
  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.5, 3));
    if (zoomScale === 1) setPanOffset({ x: 0, y: 0 });
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleToggleZoom = () => {
    if (zoomScale > 1) {
      resetZoom();
    } else {
      setZoomScale(2);
    }
  };

  // Double tap to zoom (mobile friendly)
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTapRef.current < DOUBLE_PRESS_DELAY) {
      handleToggleZoom();
    }
    lastTapRef.current = now;
  };

  // Simple swipe logic on Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomScale === 1) {
      touchStartRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current !== null && e.changedTouches.length === 1 && zoomScale === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartRef.current;
      const swipeThreshold = 50; // pixels
      
      if (deltaX > swipeThreshold) {
        prevImage();
      } else if (deltaX < -swipeThreshold) {
        nextImage();
      }
      touchStartRef.current = null;
    }
  };

  const activeImage = activeIdx !== null ? filteredImages[activeIdx] : null;

  return (
    <div className="space-y-12">
      {/* ── Category Filters ── */}
      <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
        {categories.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                resetZoom();
              }}
              className={`rounded-full px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:text-sm ${
                active
                  ? "bg-orange text-white shadow-cta-glow"
                  : "bg-light-blue text-navy hover:bg-sky/10 hover:text-sky"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </FadeUp>

      {/* ── Masonry Grid Layout ── */}
      <div className="relative">
        <motion.div 
          layout
          className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => {
              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 break-inside-avoid sm:mb-8"
                >
                  <div
                    onClick={() => {
                      setActiveIdx(idx);
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                  >
                    {/* Image Box */}
                    <div className={`relative w-full ${img.aspect} overflow-hidden`}>
                      <Image
                        src={img.src}
                        alt="Salve Maria Tours Gallery"
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Immersive Zoomable Lightbox ── */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {activeIdx !== null && activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex flex-col justify-between p-5 backdrop-blur-xl md:p-8"
              style={{ backgroundColor: "rgba(15, 30, 61, 0.98)" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Header controls bar */}
              <div className="relative z-10 flex w-full items-center justify-between border-b border-white/10 pb-4">
                {/* Elegant Minimalist Index Indicator */}
                <div className="text-left">
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-sky">
                    Photo {activeIdx + 1} of {filteredImages.length}
                  </span>
                </div>

                {/* Utility controls (Vibrant and Premium Dark-Midnight style) */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Reset Zoom Button */}
                  {zoomScale > 1 && (
                    <button
                      onClick={resetZoom}
                      title="Reset Zoom"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy border border-white/20 text-white transition-all hover:bg-sky shadow-lg active:scale-90"
                    >
                      <HiArrowPath className="h-4 w-4" />
                    </button>
                  )}

                  {/* Zoom Out Button */}
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomScale <= 1}
                    title="Zoom Out"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy border border-white/20 text-white transition-all hover:bg-sky disabled:opacity-20 disabled:cursor-not-allowed shadow-lg active:scale-90"
                  >
                    <HiMinus className="h-4.5 w-4.5 font-bold" />
                  </button>

                  {/* Zoom scale percentage */}
                  <span className="rounded-xl bg-footer-dark border border-white/10 px-3 py-1.5 text-center font-body text-xs font-semibold text-sky min-w-[56px]">
                    {Math.round(zoomScale * 100)}%
                  </span>

                  {/* Zoom In Button */}
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomScale >= 3}
                    title="Zoom In"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy border border-white/20 text-white transition-all hover:bg-sky disabled:opacity-20 disabled:cursor-not-allowed shadow-lg active:scale-90"
                  >
                    <HiPlus className="h-4.5 w-4.5 font-bold" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={closeLightbox}
                    title="Close Lightbox"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-white shadow-cta-glow transition-all hover:bg-orange/90 hover:scale-105 active:scale-90"
                  >
                    <HiXMark className="h-5.5 w-5.5 font-bold" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame with enhanced height bounds (No empty tops!) */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden py-6">
                {/* Prev arrow (Desktop) */}
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-4 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-navy/80 text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-sky hover:scale-105 active:scale-95 md:flex"
                >
                  <HiChevronLeft className="h-6 w-6" />
                </button>

                {/* Main Zoomable/Draggable canvas (Mathematically centered as a direct flex child) */}
                <motion.div
                  drag={zoomScale > 1}
                  dragConstraints={{
                    left: -400 * (zoomScale - 1),
                    right: 400 * (zoomScale - 1),
                    top: -400 * (zoomScale - 1),
                    bottom: 400 * (zoomScale - 1)
                  }}
                  dragElastic={0.15}
                  animate={{
                    scale: zoomScale,
                    x: zoomScale > 1 ? panOffset.x : 0,
                    y: zoomScale > 1 ? panOffset.y : 0
                  }}
                  onDragEnd={(e, info) => {
                    if (zoomScale > 1) {
                      setPanOffset({
                        x: panOffset.x + info.offset.x,
                        y: panOffset.y + info.offset.y
                      });
                    }
                  }}
                  onClick={handleDoubleTap}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="relative flex items-center justify-center max-h-full max-w-full cursor-grab select-none active:cursor-grabbing"
                  style={{
                    touchAction: zoomScale > 1 ? "none" : "pan-y"
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeImage.src}
                    alt="Salve Maria Tours Gallery Photo"
                    className="max-h-[78vh] w-auto max-w-[95vw] rounded-xl object-contain shadow-2xl transition-transform duration-200 md:max-h-[82vh]"
                    draggable={false}
                  />
                </motion.div>

                {/* Next arrow (Desktop) */}
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-navy/80 text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-sky hover:scale-105 active:scale-95 md:flex"
                >
                  <HiChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Minimal Floating Navigation Controls on Mobile Only */}
              <div className="relative z-10 flex items-center justify-center pb-4 md:hidden">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevImage}
                    className="flex h-10 w-24 items-center justify-center gap-1 rounded-xl bg-white/10 border border-white/15 font-body text-xs font-semibold text-white/90 active:bg-white/20"
                  >
                    <HiChevronLeft className="h-4 w-4" /> Previous
                  </button>
                  <span className="font-body text-xs font-semibold text-white/60">
                    {activeIdx + 1} / {filteredImages.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="flex h-10 w-24 items-center justify-center gap-1 rounded-xl bg-white/10 border border-white/15 font-body text-xs font-semibold text-white/90 active:bg-white/20"
                  >
                    Next <HiChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
