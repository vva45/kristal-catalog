import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocale, t } from "@/lib/i18n";

export default async function Header() {
  const locale = await getLocale();

  return (
    <header className="w-full bg-[#002B6B] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Kristall Fenster"
            width={80}
            height={80}
            style={{ width: "auto", height: "75px" }}
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
          <Link href="/">{t(locale, "home")}</Link>
          <Link href="/materials">{t(locale, "materials")}</Link>
          <Link href="/colors">{t(locale, "colours")}</Link>
          <Link href="/contact">{t(locale, "contact")}</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="bg-black px-6 py-3 rounded-lg text-white"
          >
            {t(locale, "products")}
          </Link>

          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
