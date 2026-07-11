interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

/**
 * Reusable CTA button for hero sections. Works for both in-page anchors
 * (href="#systems") and normal routes - kept as a plain <a> for that reason.
 */
export default function HeroButton({
  href,
  children,
  variant = "primary",
}: HeroButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-black hover:bg-yellow-400 hover:text-black"
      : "bg-white/10 hover:bg-white/20 border border-white/30";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 ${styles} transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg text-white`}
    >
      {children}
      <span className="text-2xl">→</span>
    </a>
  );
}
