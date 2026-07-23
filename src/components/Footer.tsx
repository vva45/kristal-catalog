import Link from "next/link";
import { getLocale, t } from "@/lib/i18n";

export default async function Footer() {
  const locale = await getLocale();

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
              {t(locale, "footerDescription")}
            </p>
          </div>

          {/* Products */}

          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {t(locale, "productsTitle")}
            </h4>

            <div className="space-y-2 text-white/80">

              <Link
                href="/products/windows"
                className="block hover:text-white"
              >
                {t(locale, "windows")}
              </Link>

              <Link
                href="/products/doors"
                className="block hover:text-white"
              >
                {t(locale, "doors")}
              </Link>

              <Link
                href="/products/entrance-doors"
                className="block hover:text-white"
              >
                {t(locale, "entranceDoors")}
              </Link>

              <Link
                href="/products/garage-doors"
                className="block hover:text-white"
              >
                {t(locale, "garageDoors")}
              </Link>

              <Link
                href="/products/roller-shutters"
                className="block hover:text-white"
              >
                {t(locale, "rollerShutters")}
              </Link>

            </div>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {t(locale, "company")}
            </h4>

            <div className="space-y-2 text-white/80">

              <Link
                href="/materials"
                className="block hover:text-white"
              >
                {t(locale, "materials")}
              </Link>

              <Link
                href="/colors"
                className="block hover:text-white"
              >
                {t(locale, "colours")}
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white"
              >
                {t(locale, "contact")}
              </Link>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-bold text-lg text-white mb-4">
              {t(locale, "contact")}
            </h4>

            <div className="space-y-2 text-white/80">

              <p>Hechingen, {locale === "de" ? "Deutschland" : "Germany"}</p>

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

          © {new Date().getFullYear()} Kristall Fenster.{" "}
          {t(locale, "allRightsReserved")}

        </div>

      </div>

    </footer>
  );
}
