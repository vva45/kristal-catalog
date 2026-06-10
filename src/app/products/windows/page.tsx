import Link from "next/link";
export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-12">
          Windows
        </h1>

        <div className="grid gap-8">
          <Link
  href="/products/windows/pvc"
  className="group relative overflow-hidden rounded-2xl h-[360px] block"
>
  <img
  src="/categories/images/pvc-category.png"
  alt="PVC"
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    ease-out
    group-hover:scale-105
  "
/>

  <div className="absolute inset-0 bg-black/30" />

<div className="absolute bottom-8 left-8">
  <h2 className="text-5xl font-bold text-white">
    PVC
  </h2>
  <p className="text-white/80 mt-2">
  High performance PVC systems
</p>
</div>
</Link>

          <Link
  href="/products/windows/aluminium"
  className="group relative overflow-hidden rounded-2xl h-[360px] block"
>
  <img
  src="/categories/images/aluminium-category.png"
  alt="Aluminium"
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    ease-out
    group-hover:scale-105
  "
/>

  <div className="absolute inset-0 bg-black/30" />

<div className="absolute bottom-8 left-8">
  <h2 className="text-5xl font-bold text-white">
    Aluminium
  </h2>
  <p className="text-white/80 mt-2">
  Modern design with superior durability
</p>
</div>
</Link>

          <Link
  href="/products/windows/steel"
  className="group relative overflow-hidden rounded-2xl h-[360px] block"
>
  <img
  src="/categories/images/steel-category.png"
  alt="Steel"
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    ease-out
    group-hover:scale-105
  "
/>

  <div className="absolute inset-0 bg-black/30" />

<div className="absolute bottom-8 left-8">
  <h2 className="text-5xl font-bold text-white">
    Steel
  </h2>
  <p className="text-white/80 mt-2">
  Durable and corrosion-resistant steel systems
</p>
</div>
</Link>

          <Link
  href="/products/windows/wood"
  className="group relative overflow-hidden rounded-2xl h-[360px] block"
>
  <img
  src="/categories/images/wood-category.png"
  alt="Wood"
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    ease-out
    group-hover:scale-105
  "
/>

  <div className="absolute inset-0 bg-black/30" />

<div className="absolute bottom-8 left-8">
  <h2 className="text-5xl font-bold text-white">
    Wood
  </h2>
  <p className="text-white/80 mt-2">
  Natural beauty and durability
</p>
</div>
</Link>
        </div>
      </div>
    </main>
  );
}