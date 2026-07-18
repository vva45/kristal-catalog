"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function changeLanguage(nextLocale: Locale) {
    if (nextLocale === locale) return;
    document.cookie = `kf_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    window.location.assign(pathname || "/");
  }

  return (
    <select value={locale} onChange={(event) => changeLanguage(event.target.value as Locale)} className="cursor-pointer appearance-none bg-transparent pr-1 text-sm font-semibold text-white outline-none" aria-label="Language">
      <option value="en" className="bg-[#002B6B]">EN</option>
      <option value="de" className="bg-[#002B6B]">DE</option>
    </select>
  );
}
