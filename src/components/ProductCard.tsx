import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: string;
  pdf: string;
  /** Optional: if given, the image+title become a link to the technical
   * detail page (e.g. /products/systems/aluminium/mb-45). The PDF button
   * still opens the PDF directly either way. Omit to keep old behaviour. */
  href?: string;
};

export default function ProductCard({
  title,
  image,
  pdf,
  href,
}: ProductCardProps) {
  const imageBlock = (
    <Image
      src={image}
      alt={title}
      width={640}
      height={512}
      sizes="(min-width: 768px) 50vw, 100vw"
      className="w-full h-80 object-contain"
    />
  );

  const titleBlock = (
    <h3 className="text-black text-2xl font-bold mb-4">
      {title}
    </h3>
  );

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
      {href ? (
        <Link href={href} className="block">
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}

      <div className="p-6">
        {href ? (
          <Link href={href} className="hover:underline">
            {titleBlock}
          </Link>
        ) : (
          titleBlock
        )}

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
