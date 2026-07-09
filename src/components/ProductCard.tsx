type ProductCardProps = {
  title: string;
  image: string;
  pdf: string;
};

export default function ProductCard({
  title,
  image,
  pdf,
}: ProductCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        overflow-hidden
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-contain"
      />

      <div className="p-6">
        <h3 className="text-black text-2xl font-bold mb-4">
          {title}
        </h3>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-black
            text-white
            px-4
            py-2
            rounded-lg
            transition-colors
            duration-300
            hover:bg-[#D4AF37]
            hover:text-black
          "
        >
          Technical Data
        </a>
      </div>
    </div>
  );
}