import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import CartLink from "@/components/CartLink";

export const metadata: Metadata = {
  title: "Binagre — Comida casera a domicilio en Madrid",
  description:
    "Guisos de verdad, cachopo y comida de hogar a domicilio. COMER BIEN. AQUÍ Y AHORA. Pide online sin comisiones de plataformas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <header className="header">
            <div className="container header-inner">
              <Link href="/" className="logo display">BINAGRE</Link>
              <nav className="nav">
                <Link href="/carta">Carta</Link>
                <CartLink />
              </nav>
            </div>
          </header>

          {children}

          <footer className="footer">
            <div className="container">
              <p className="display" style={{ color: "var(--bin-red)" }}>
                COMER BIEN. AQUÍ Y AHORA.
              </p>
              <p>Binagre · cocina de hogar guisada en Madrid · pedidos@binagre.es</p>
            </div>
          </footer>

          <div className="mobile-cta">
            <CartLink block />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
