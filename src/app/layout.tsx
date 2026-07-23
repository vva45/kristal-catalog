import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { getLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kristall Fenster",
  description: "Premium windows, doors and installation in Germany",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
