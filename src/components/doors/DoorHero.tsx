interface DoorHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function DoorHero({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Explore Systems",
  ctaHref = "#systems",
}: DoorHeroProps) {
  return (
    <section className="relative pt-24 h-[calc(100vh-96px)]">
    
      {/* Background Image */}

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(11,50,112,0.95) 0%,
              rgba(11,50,112,0.90) 18%,
              rgba(11,50,112,0.75) 38%,
              rgba(11,50,112,0.40) 60%,
              rgba(11,50,112,0.10) 82%,
              rgba(11,50,112,0.00) 100%
            )
          `,
        }}
      />

      {/* Content */}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.30em] text-yellow-400 font-semibold text-sm mb-6">
            {eyebrow}
          </p>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
            {title}
          </h1>

          <p className="text-xl text-white/90 leading-9 max-w-xl mb-12">
            {description}
          </p>

          <a
            href={ctaHref}
            className="inline-flex items-center gap-3 bg-black hover:bg-yellow-400 hover:text-black transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            {ctaLabel}

            <span className="text-2xl">
              →
            </span>

          </a>

        </div>

      </div>

      {/* Bottom Fade */}

      <div
        className="absolute bottom-0 left-0 w-full h-40"
        style={{
          background:
            "linear-gradient(to top, #0B3270 0%, transparent 100%)",
        }}
      />

    </section>
  );
}