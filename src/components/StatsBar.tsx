"use client";

// ─────────────────────────────────────────────
// WaveDivider — diagonal slash transition
// ─────────────────────────────────────────────



// ─────────────────────────────────────────────
// StatsBar — premium horizontal stat strip
// ─────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const stats = [
  {
    end: 2000,
    suffix: "+",
    label: "Happy Pilgrims",
    note: "Souls journeyed with us",
    accent: "sky" as const,
  },
  {
    end: 40,
    suffix: "+",
    label: "Sacred Routes",
    note: "Across India & abroad",
    accent: "orange" as const,
  },
  {
    end: 15,
    suffix: "+",
    label: "Years of Trust",
    note: "Serving devotees since 2008",
    accent: "sky" as const,
  },
  {
    end: 50,
    suffix: "+",
    label: "Sacred Sites",
    note: "Pilgrimage destinations covered",
    accent: "orange" as const,
  },
];

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-0">
      {/* Top rule */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5  sm:px-8 py-14 sm:py-16 lg:px-14">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-orange" />
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
            By the Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-0 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} active={inView} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
}

function StatCard({
  stat,
  active,
  index,
}: {
  stat: (typeof stats)[0];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.end, active);
  const isOrange = stat.accent === "orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col px-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
      style={{
        borderRight:
          index < stats.length - 1
            ? "1px solid rgba(27,58,107,0.08)"
            : "none",
      }}
    >
      {/* Number */}
      <div className="flex items-baseline gap-1">
        <span
          className={`font-heading text-[56px] font-bold not-italic leading-none tracking-tight sm:text-[64px] ${isOrange ? "text-orange" : "text-navy"
            }`}
        >
          {count}
        </span>
        <span
          className={`font-heading text-3xl font-bold not-italic leading-none sm:text-4xl ${isOrange ? "text-orange/60" : "text-sky"
            }`}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="font-body mt-3 text-sm font-bold uppercase tracking-[0.2em] text-navy/80">
        {stat.label}
      </p>

      {/* Note + accent line */}
      <div className="mt-3 flex items-center gap-2">
        <span
          className={`h-px w-6 shrink-0 ${isOrange ? "bg-orange/40" : "bg-sky/50"}`}
        />
        <p className="font-body text-[11px] font-light leading-snug text-gray-400">
          {stat.note}
        </p>
      </div>
    </motion.div>
  );
}