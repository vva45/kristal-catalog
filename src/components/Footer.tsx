import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#001f4f] to-black">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              KRISTALL FENSTER
            </h3>

            <p className="text-white/70">
              Premium windows, doors and
              architectural systems for modern living.
            </p>
          </div>

          {/* Products */}

          <div>
            <h4 className="font-bold text-lg text-white mb-4">
  Products
</h4>

            <div className="space-y-2 text-white/80">

              <Link
                href="/products/windows"
                className="block hover:text-white"
              >
                Windows
              </Link>

              <Link
                href="/products/doors"
                className="block hover:text-white"
              >
                Doors
              </Link>

              <Link
                href="/products/roller-shutters"
                className="block hover:text-white"
              >
                Roller Shutters
              </Link>

            </div>
          </div>

          {/* Company */}

          <div>
           <h4 className="font-bold text-lg text-white mb-4">
  Company
</h4>

            <div className="space-y-2 text-white/80">

              <Link
                href="/materials"
                className="block hover:text-white"
              >
                Materials
              </Link>

              <Link
                href="/colors"
                className="block hover:text-white"
              >
                Colours
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-bold text-lg text-white mb-4">
  Contact
</h4>

           <div className="space-y-2 text-white/80">

              <p>Hechingen, Germany</p>

              <p>
                info@kristall-fenster.de
              </p>

              <p>
                +49 174 744 0567
                <br/>
                +49 162 774 2992
              </p>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-white/50 text-sm">

          © {new Date().getFullYear()} Kristall Fenster.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}
