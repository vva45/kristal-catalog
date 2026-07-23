import SectionTitle from "../cards/SectionTitle";
import DespiroPanelCard from "./DespiroPanelCard";
import { EntranceDoorDesign } from "../../data/products/entrance-door-designs";

interface DespiroPanelGridProps {
  id?: string;
  title: string;
  description?: string;
  designs: EntranceDoorDesign[];
}

export default function DespiroPanelGrid({
  id,
  title,
  description,
  designs,
}: DespiroPanelGridProps) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
      <SectionTitle title={title} description={description} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {designs.map((design) => (
          <DespiroPanelCard key={design.id} design={design} />
        ))}
      </div>
    </section>
  );
}
