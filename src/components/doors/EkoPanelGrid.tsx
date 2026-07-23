import SectionTitle from "../cards/SectionTitle";
import EkoPanelCard from "./EkoPanelCard";
import { EkoDoorPanel } from "../../data/products/eko-door-panels";

interface EkoPanelGridProps {
  id?: string;
  title: string;
  description?: string;
  panels: EkoDoorPanel[];
}

export default function EkoPanelGrid({
  id,
  title,
  description,
  panels,
}: EkoPanelGridProps) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
      <SectionTitle title={title} description={description} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {panels.map((panel) => (
          <EkoPanelCard key={panel.id} panel={panel} />
        ))}
      </div>
    </section>
  );
}
