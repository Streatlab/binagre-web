import Link from "next/link";
import { CARTA, fmtEur } from "@/lib/menu";
import CPChecker from "@/components/CPChecker";
import AddButton from "@/components/AddButton";

export default function Home() {
  const destacados = CARTA.filter((p) => p.destacado);

  return (
    <main>
      <section className="hero container">
        <span className="badge">Cocina de hogar · guisado a fuego lento</span>
        <h1 className="display">COMER BIEN.<br />AQUÍ Y AHORA.</h1>
        <p>
          Guisos de verdad y nuestro cachopo, hechos en Madrid y en tu mesa en
          menos de una hora. Sin apps, sin comisiones, directo de nuestra cocina.
        </p>
        <Link href="/carta" className="btn" style={{ fontSize: "1.15rem", padding: "14px 34px" }}>
          Ver carta y pedir
        </Link>
        <div style={{ marginTop: 32 }}>
          <p style={{ fontWeight: 700, marginBottom: 10 }}>¿Llegamos a tu casa?</p>
          <CPChecker />
        </div>
      </section>

      <section className="section container">
        <h2 className="display">Los que triunfan</h2>
        <div className="grid">
          {destacados.map((p) => (
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

      <section className="section container" style={{ textAlign: "center" }}>
        <h2 className="display">¿Quién cocina tu comida?</h2>
        <p style={{ maxWidth: 620, margin: "0 auto" }}>
          Somos una cocina de barrio en Vallecas. Guisamos cada mañana como se
          hacía en casa: sin prisas, con producto de verdad y recetas de toda la
          vida. Pedir aquí, en nuestra web, es la forma más directa de
          apoyarnos: sin intermediarios.
        </p>
      </section>
    </main>
  );
}
