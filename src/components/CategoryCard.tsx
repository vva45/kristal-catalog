import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function CategoryCard({
  title,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="relative h-[360px] overflow-hidden rounded-xl cursor-pointer group shadow-2xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />

        <h2 className="absolute bottom-6 left-6 text-white text-4xl font-bold">
          {title}
        </h2>
      </div>
    </Link>
  );
}
