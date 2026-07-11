// src/components/CategoryHero.tsx
//
// Premium intro block for the top of a category landing page (the pages
// that show the material banners, e.g. /products/windows and /products/doors).
// Replaces the bare "<h1>Doors</h1>" with an eyebrow + big title + lead
// paragraph, so those pages don't feel so empty above the banners.

interface CategoryHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function CategoryHero({
  eyebrow = "Premium Installation - Germany",
  title,
  description,
}: CategoryHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-16 pb-4">
      <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">
        {eyebrow}
      </p>

      <h1 className="text-6xl font-bold mb-6">{title}</h1>

      <p className="text-xl text-white/80 max-w-3xl">{description}</p>
    </section>
  );
}
