interface FeatureCardProps {
  title: string;
  description: string;
  /** Emoji or short symbol - keeps this component dependency-free (no icon lib) */
  icon?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition">
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-white/70">{description}</p>
    </div>
  );
}
