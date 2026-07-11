import Link from "next/link";

interface DoorBannerProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Closing CTA banner, same pattern as the "Not sure which material is
 * right for you?" block on /materials.
 */
export default function DoorBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
}: DoorBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="bg-white/10 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>

        {description && (
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">{description}</p>
        )}

        <Link
          href={ctaHref}
          className="inline-block bg-black px-8 py-4 rounded-lg text-white hover:bg-zinc-800 transition"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
