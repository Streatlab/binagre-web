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
      <h1 className="display" style={{ fontSize: "2.4rem", color: "var(--bin-red)" }}>
        La carta
      </h1>
      <p style={{ margin: "8px 0 28px" }}>
        Corta, honesta y guisada hoy. Menos es más.
      </p>

      {CATEGORIAS.map((cat) => {
        const platos = CARTA.filter((p) => p.categoria === cat);
        if (!platos.length) return null;
        return (
          <section className="section" key={cat} style={{ paddingTop: 8 }}>
            <h2 className="display">{cat}</h2>
            <div className="grid">
              {platos.map((p) => (
                <article className="card" key={p.id}>
                  <div className="card-img">{p.emoji}</div>
                  <div className="card-body">
                    <h3>{p.nombre}</h3>
                    <p className="desc">{p.desc}</p>
                    <div className="card-foot">
                      <span className="price">{fmtEur(p.precio)}</span>
                      <AddButton plato={p} />
                    </div>
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
