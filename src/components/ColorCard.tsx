type ColorCardProps = {
  name: string;
  color: string;
};

export default function ColorCard({
  name,
  color,
}: ColorCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg hover:scale-105 transition duration-300">

      <div
        className="h-40 border-b border-zinc-200"
        style={{ backgroundColor: color }}
      />

      <div className="p-4">
        <p className="text-center text-black font-semibold">
          {name}
        </p>
      </div>

    </div>
  );
}