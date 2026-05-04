"use client";

import { motion, type MotionProps } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
} & Omit<MotionProps, "children" | "initial" | "whileInView" | "transition">;

export function FadeUp({
  children,
  delay = 0,
  className,
  ...rest
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
