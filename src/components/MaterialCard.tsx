import Image from "next/image";
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
        <Image
          src={image}
          alt={title}
          width={640}
          height={400}
          sizes="(min-width: 768px) 50vw, 100vw"
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
