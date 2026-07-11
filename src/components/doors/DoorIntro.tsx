import Link from "next/link";

interface DoorIntroProps {
  title: string;
  paragraphs: string[];
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Text + image intro block, same pattern as the material sections on
 * /materials (image left, text right, optional CTA).
 */
export default function DoorIntro({
  title,
  paragraphs,
  image,
  ctaLabel,
  ctaHref,
}: DoorIntroProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-[420px] object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>

          <div className="space-y-4 text-white/80">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-block mt-8 bg-black px-6 py-3 rounded-lg text-white hover:bg-zinc-800 transition"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
