"use client";

import { motion, type MotionProps } from "framer-motion";

type SlideInProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
} & Omit<MotionProps, "children" | "initial" | "whileInView" | "transition">;

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
  ...rest
}: SlideInProps) {
  const x = direction === "left" ? -48 : 48;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.65,
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
