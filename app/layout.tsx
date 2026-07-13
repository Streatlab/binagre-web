import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import CartLink from "@/components/CartLink";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-display",
});
const karla = Karla({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Binagre — Comida casera a domicilio en Madrid",
  description:
    "Guisos de verdad, cachopo y comida de hogar a domicilio. COMER BIEN. AQUÍ Y AHORA. Pide online, directo de nuestra cocina.",
};

const CLAIM = " COMER BIEN. AQUÍ Y AHORA. · GUISADO A FUEGO LENTO · BINAGRE ·";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <CartProvider>
          <div className="gingham" aria-hidden />
          <header className="header">
            <div className="container header-inner">
              <Link href="/" className="logo display">Binagre</Link>
              <nav className="nav">
                <Link href="/carta">La carta</Link>
                <CartLink />
              </nav>
            </div>
          </header>

          <div className="marquee" aria-hidden>
            <span className="marquee-track">{CLAIM.repeat(4)}{CLAIM.repeat(4)}</span>
          </div>

          {children}

          <footer className="footer">
            <div className="container">
              <p className="claim display">COMER BIEN. AQUÍ Y AHORA.</p>
              <p>Binagre · cocina de hogar guisada en Vallecas, Madrid · pedidos@binagre.es</p>
            </div>
          </footer>
          <div className="gingham" aria-hidden />

          <div className="mobile-cta">
            <CartLink block />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
