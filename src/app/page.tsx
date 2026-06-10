import CategoryCard from "../components/CategoryCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
    
     <section className="relative overflow-hidden min-h-[850px] flex items-center">

  {/* Imagen fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/hero-villa.png')",
    }}
  />

  {/* Capa azul */}
  <div className="absolute inset-0 bg-[#002B6B]/10" />

  {/* Degradado izquierda -> derecha */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#002B6B] via-[#002B6B]/10 to-transparent" />

  {/* Degradado abajo */}
  <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#002B6B] to-transparent" />

  {/* Contenido */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

    <p className="text-yellow-400 font-bold uppercase mb-6">
      PREMIUM INSTALLATION - GERMANY
    </p>

    <h1 className="text-6xl md:text-7xl font-bold max-w-3xl leading-tight mb-8">
      Elegancia y funcionalidad
      <br />
      para cada espacio
    </h1>

    <p className="text-xl max-w-2xl mb-10">
      Ventanas, puertas, persianas y mucho más.
      Instalación profesional en Hechingen y alrededores.
    </p>

    <a
      href="/products"
      className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition"
    >
      Explore Products
    </a>

  </div>

</section>

    <section className="max-w-7xl mx-auto px-8 py-16">
  <h1 className="text-6xl font-bold mb-3">
  Categories
</h1>

<p className="text-white/70 text-lg mb-10">
  Discover premium solutions for every space in your home.
</p>
  <div className="grid gap-8">

  <CategoryCard
    title="Windows"
    image="/categories/windows.png"
    href="/products/windows"
  />

  <CategoryCard
    title="Doors"
    image="/categories/doors.png"
    href="/products/doors"
  />

  <CategoryCard
    title="Roller Shutters"
    image="/categories/roller-shutters.png"
    href="/products/roller-shutters"
  />

  <CategoryCard
    title="Mosquito Nets"
    image="/categories/mosquito-nets.png"
    href="/products/mosquito-nets"
  />

  <CategoryCard
    title="Garage Doors"
    image="/categories/garage-doors.png"
    href="/products/garage-doors"
  />

  <CategoryCard
    title="Main Gates"
    image="/categories/main-gates.png"
    href="/products/main-gates"
  />

  <CategoryCard
    title="Terrace & Pergolas"
    image="/categories/pergolas.png"
    href="/products/pergolas"
  />

  <CategoryCard
    title="Accessories"
    image="/categories/accessories.png"
    href="/products/accessories"
  />

</div>
</section>
         </main>
  );
}