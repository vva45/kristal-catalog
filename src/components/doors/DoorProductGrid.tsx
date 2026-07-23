import ProductCard from "../ProductCard";
import SectionTitle from "../cards/SectionTitle";
import { ProductSystem } from "../../data/products/types";
import { getLocale, t } from "@/lib/i18n";

interface DoorProductGridProps {
  title?: string;
  description?: string;
  products: ProductSystem[];
}

/**
 * Renders the ProductCard grid for a door category page. Give it an id so
 * DoorHero's "Explore Systems" button (href="#systems") can scroll to it.
 */
export default async function DoorProductGrid({
  title,
  description,
  products,
}: DoorProductGridProps) {
  const locale = await getLocale();

  return (
    <section id="systems" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
      <SectionTitle
        title={title ?? t(locale, "systems")}
        description={description}
      />

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            image={product.image}
            pdf={product.pdf}
            href={`/products/systems/${product.material}/${product.id}`}
          />
        ))}
      </div>
    </section>
  );
}
