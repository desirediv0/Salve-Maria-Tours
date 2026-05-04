export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative z-[5] -mt-px w-full overflow-hidden ${className}`}
      style={{ height: "clamp(40px, 6vw, 72px)" }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow layer — subtle depth */}
        <path
          d="M0 72V38C200 8 400 58 640 28C880 -2 1100 52 1440 18V72H0Z"
          fill="rgba(27,58,107,0.06)"
        />
        {/* Main white fill */}
        <path
          d="M0 72V42C200 12 400 62 640 32C880 2 1100 56 1440 22V72H0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}