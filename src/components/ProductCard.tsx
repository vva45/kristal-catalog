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
    <div className="bg-white rounded-xl overflow-hidden">
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
          className="bg-black text-white px-4 py-2 rounded-lg inline-block"
        >
          Technical Data
        </a>
      </div>
    </div>
  );
}