import type { Metadata } from "next";
import "./globals.css";

const title = "Mecânica e Guinchos Batista | Guincho 24h em São Gabriel";
const description = "Mecânica leve e pesada, guincho 24 horas, prancha, munck e atendimento para frotas em São Gabriel — RS. Quase 20 anos de experiência.";

export const metadata: Metadata = {
  metadataBase: new URL("https://batista-guinchos.vercel.app"),
  title, description,
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Mecânica e Guinchos Batista" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const schema = {
  "@context":"https://schema.org","@type":"AutoRepair","name":"Mecânica e Guinchos Batista",
  "description":description,"telephone":"+5555999642296","foundingDate":"2007-08-22","priceRange":"$$",
  "address":{"@type":"PostalAddress","streetAddress":"Av. Francisco Chagas, 1866 — Centro","addressLocality":"São Gabriel","addressRegion":"RS","addressCountry":"BR"},
  "geo":{"@type":"GeoCoordinates","latitude":-30.3237506,"longitude":-54.342669},
  "openingHours":["Mo-Fr 08:00-18:30","Sa 08:00-12:30"],"areaServed":"São Gabriel e região, RS",
  "sameAs":["https://www.instagram.com/batista_guinchos"]
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body><a href="#inicio" className="sr-only focus:not-sr-only">Pular para o conteúdo</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
