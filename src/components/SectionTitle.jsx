export default function SectionTitle({ eyebrow, title, align = "center", light }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {eyebrow && (
        <span
          className={`text-xs tracking-widest2 uppercase mb-3 ${
            light ? "text-gold-bright" : "text-gold-dim"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span className="block w-14 h-px bg-gold mt-5" />
    </div>
  );
}
