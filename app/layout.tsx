import type { Metadata } from "next";
import "./globals.css";

const title = "Mecânica e Guinchos Batista | Guincho 24h em São Gabriel";
const description = "Mecânica leve e pesada, socorro mecânico em até 100 km, guinchos e muncks 24 horas e transporte para todo o Brasil. São Gabriel — RS.";

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
  "description":description,"telephone":["+5555999777852","+5555999642296"],"foundingDate":"2007-08-22","priceRange":"$$",
  "address":{"@type":"PostalAddress","streetAddress":"Av. Francisco Hermenegildo da Silva, 379 — Esplanada","postalCode":"97311-000","addressLocality":"São Gabriel","addressRegion":"RS","addressCountry":"BR"},
  "openingHours":["Mo-Sa 08:00-12:00","Mo-Sa 14:00-18:00"],"areaServed":["São Gabriel e região, RS","Brasil"],
  "paymentAccepted":["Dinheiro","Pix","Cartão de débito","Cartão de crédito","Boleto mediante consulta"],
  "sameAs":["https://www.instagram.com/batista_guinchos","https://www.facebook.com/share/1cXgV8vyD5/?mibextid=wwXIfr"]
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body><a href="#inicio" className="sr-only focus:not-sr-only">Pular para o conteúdo</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
