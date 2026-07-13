import type { Metadata } from "next";
import { CARTA, CATEGORIAS, fmtEur } from "@/lib/menu";
import AddButton from "@/components/AddButton";

export const metadata: Metadata = {
  title: "Carta — Binagre | Guisos y cachopo a domicilio en Madrid",
  description:
    "Carta de Binagre: cachopo de ternera, carrilleras, lentejas, albóndigas de la abuela y postres caseros. Pide online a domicilio en Madrid.",
};

export default function Carta() {
  return (
    <main className="container section">
      <h1 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)" }}>
        La carta
      </h1>
      <p style={{ margin: "10px 0 20px", fontSize: "1.1rem" }}>
        Corta, honesta y guisada hoy. Menos es más.
      </p>

      {CATEGORIAS.map((cat) => {
        const platos = CARTA.filter((p) => p.categoria === cat);
        if (!platos.length) return null;
        return (
          <section className="section" key={cat} style={{ paddingTop: 12, paddingBottom: 12 }}>
            <div className="section-head">
              <h2 className="display" style={{ color: "var(--rojo)" }}>{cat}</h2>
              <span className="hilo" aria-hidden />
            </div>
            <div className="grid">
              {platos.map((p) => (
                <article className="card" key={p.id}>
                  <div className="plato" aria-hidden>{p.emoji}</div>
                  <h3>{p.nombre}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="card-foot">
                    <span className="price">{fmtEur(p.precio)}</span>
                    <AddButton plato={p} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
