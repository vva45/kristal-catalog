interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** true = white text for the navy background, false = dark text for white cards */
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = true,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-black";
  const descColor = light ? "text-white/80" : "text-black/70";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
