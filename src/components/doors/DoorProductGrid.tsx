import ProductCard from "../ProductCard";
import SectionTitle from "../cards/SectionTitle";
import { ProductSystem } from "../../data/products/types";

interface DoorProductGridProps {
  title?: string;
  description?: string;
  products: ProductSystem[];
}

/**
 * Renders the ProductCard grid for a door category page. Give it an id so
 * DoorHero's "Explore Systems" button (href="#systems") can scroll to it.
 */
export default function DoorProductGrid({
  title = "Systems",
  description,
  products,
}: DoorProductGridProps) {
  return (
    <section id="systems" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
      <SectionTitle title={title} description={description} />

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
