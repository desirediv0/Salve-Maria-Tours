type SectionLabelProps = {
  text: string;
  className?: string;
};

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`}>
      <div className="h-px w-12 shrink-0 bg-sky" aria-hidden />
      <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#29ABE2]">
        {text}
      </span>
      <div className="h-px w-12 shrink-0 bg-sky" aria-hidden />
    </div>
  );
}

