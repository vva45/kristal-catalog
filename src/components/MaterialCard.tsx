import Link from "next/link";

type MaterialCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function MaterialCard({
  title,
  image,
  href,
}: MaterialCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl overflow-hidden hover:scale-[1.02] transition">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover"
        />

        <div className="p-6">
          <h2 className="text-black text-2xl font-bold">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}