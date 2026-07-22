import { cookies } from "next/headers";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

const messages = {
  en: {
    home: "Home", materials: "Materials", colours: "Colours", contact: "Contact", products: "Our Products", exploreProducts: "Explore Products",
    premiumInstallation: "Premium Installation - Germany", heroTitle: "Elegance and functionality\nfor every space",
    heroDescription: "Windows, doors, roller shutters and much more. Professional installation in Hechingen and surrounding areas.",
    categories: "Categories", categoriesDescription: "Discover premium solutions for every space in your home.",
    windows: "Windows", doors: "Doors", entranceDoors: "Entrance Doors", rollerShutters: "Roller Shutters", mosquitoNets: "Mosquito Nets", garageDoors: "Garage Doors", mainGates: "Main Gates", pergolas: "Terrace & Pergolas", accessories: "Accessories",
    productsTitle: "Products", productsDescription: "Explore our complete range of premium window, door and architectural systems designed for modern living.", pvcSystems: "PVC Systems", aluminiumSystems: "Aluminium Systems", steelSystems: "Steel Systems", configurations: "Configurations",
    materialsTitle: "Materials", materialsDescription: "Premium materials designed for performance, durability and aesthetics.", explorePvc: "Explore PVC Systems", exploreAluminium: "Explore Aluminium Systems", exploreSteel: "Explore Steel Systems", exploreWood: "Explore Wood Systems", materialsCtaTitle: "Not sure which material is right for you?", materialsCtaDescription: "Our team can help you choose the perfect solution for your project.", contactUs: "Contact Us",
    coloursTitle: "Colours & Finishes", coloursDescription: "Discover our most popular colours and surface finishes for PVC, aluminium and steel systems.", pvcColours: "PVC Colours", aluminiumColours: "Aluminium Colours", steelColours: "Steel Colours", white: "White", anthraciteGrey: "Anthracite Grey", goldenOak: "Golden Oak", walnut: "Walnut", jetBlack: "Jet Black", graphiteGrey: "Graphite Grey", pureWhite: "Pure White", steelGrey: "Steel Grey",
    contactTitle: "Contact", contactDescription: "Planning a renovation or a new construction project? We are happy to help you choose the perfect windows, doors and architectural systems.", sendMessage: "Send us a message", name: "Name", email: "Email", phone: "Phone", messagePlaceholder: "Tell us about your project...", send: "Send Message", contactInformation: "Contact Information", address: "Address", openingHours: "Opening Hours", mondayFriday: "Monday - Friday", appointment: "Saturday & Sunday: By appointment",
    footerDescription: "Premium windows, doors and architectural systems for modern living.", company: "Company", allRightsReserved: "All rights reserved.", technicalData: "Technical Data", technicalPdf: "Download Technical PDF", askSystem: "Ask About This System", backTo: "Back to", availableVariants: "Available variants",
  },
  de: {
    home: "Startseite", materials: "Materialien", colours: "Farben", contact: "Kontakt", products: "Unsere Produkte", exploreProducts: "Produkte entdecken",
    premiumInstallation: "Premium-Montage – Deutschland", heroTitle: "Eleganz und Funktionalität\nfür jeden Raum",
    heroDescription: "Fenster, Türen, Rollläden und vieles mehr. Professionelle Montage in Hechingen und Umgebung.",
    categories: "Kategorien", categoriesDescription: "Entdecken Sie hochwertige Lösungen für jeden Bereich Ihres Zuhauses.",
    windows: "Fenster", doors: "Türen", entranceDoors: "Haustüren", rollerShutters: "Rollläden", mosquitoNets: "Insektenschutz", garageDoors: "Garagentore", mainGates: "Hoftore", pergolas: "Terrassen & Pergolen", accessories: "Zubehör",
    productsTitle: "Produkte", productsDescription: "Entdecken Sie unser komplettes Sortiment an hochwertigen Fenster-, Tür- und Architektursystemen für modernes Wohnen.", pvcSystems: "PVC-Systeme", aluminiumSystems: "Aluminiumsysteme", steelSystems: "Stahlsysteme", configurations: "Konfigurationen",
    materialsTitle: "Materialien", materialsDescription: "Hochwertige Materialien für Leistung, Langlebigkeit und Ästhetik.", explorePvc: "PVC-Systeme entdecken", exploreAluminium: "Aluminiumsysteme entdecken", exploreSteel: "Stahlsysteme entdecken", exploreWood: "Holzsysteme entdecken", materialsCtaTitle: "Sie sind nicht sicher, welches Material zu Ihnen passt?", materialsCtaDescription: "Unser Team hilft Ihnen, die passende Lösung für Ihr Projekt zu finden.", contactUs: "Kontakt aufnehmen",
    coloursTitle: "Farben & Oberflächen", coloursDescription: "Entdecken Sie unsere beliebtesten Farben und Oberflächen für PVC-, Aluminium- und Stahlsysteme.", pvcColours: "PVC-Farben", aluminiumColours: "Aluminiumfarben", steelColours: "Stahlfarben", white: "Weiß", anthraciteGrey: "Anthrazitgrau", goldenOak: "Golden Oak", walnut: "Nussbaum", jetBlack: "Tiefschwarz", graphiteGrey: "Graphitgrau", pureWhite: "Verkehrsweiß", steelGrey: "Stahlgrau",
    contactTitle: "Kontakt", contactDescription: "Planen Sie eine Sanierung oder einen Neubau? Wir beraten Sie gern bei der Wahl passender Fenster, Türen und Architektursysteme.", sendMessage: "Schreiben Sie uns", name: "Name", email: "E-Mail", phone: "Telefon", messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...", send: "Nachricht senden", contactInformation: "Kontaktdaten", address: "Adresse", openingHours: "Öffnungszeiten", mondayFriday: "Montag – Freitag", appointment: "Samstag & Sonntag: nach Vereinbarung",
    footerDescription: "Hochwertige Fenster, Türen und Architektursysteme für modernes Wohnen.", company: "Unternehmen", allRightsReserved: "Alle Rechte vorbehalten.", technicalData: "Technische Daten", technicalPdf: "Technisches PDF herunterladen", askSystem: "Zu diesem System anfragen", backTo: "Zurück zu", availableVariants: "Verfügbare Varianten",
  },
} as const;

export type MessageKey = keyof (typeof messages)["en"];

export async function getLocale(): Promise<Locale> {
  return (await cookies()).get("kf_locale")?.value === "de" ? "de" : "en";
}

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
