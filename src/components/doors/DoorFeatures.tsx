import FeatureCard from "../cards/FeatureCard";
import SectionTitle from "../cards/SectionTitle";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface DoorFeaturesProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
}

export default function DoorFeatures({
  eyebrow,
  title,
  description,
  features,
}: DoorFeaturesProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
