import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full bg-[#002B6B] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="KRISTALL FENSTER"
            width={80}
            height={80}
            className="object-contain"
          />

          <div className="leading-none">
    <div className="text-yellow-400 font-extrabold text-4xl tracking-wide">
      KRISTALL
    </div>

    <div className="text-yellow-400 font-extrabold text-3xl tracking-wide">
      FENSTER
    </div>
  </div>
</Link>

        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/materials">Materials</Link>
          <Link href="/colors">Colors</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="bg-black px-6 py-3 rounded-lg text-white"
          >
            Our Products
          </Link>

          <button className="text-white">
            EN ▼
          </button>
        </div>
      </div>
    </header>
  );
}