import Link from "next/link";
import { CARTA, fmtEur } from "@/lib/menu";
import CPChecker from "@/components/CPChecker";
import AddButton from "@/components/AddButton";

export default function Home() {
  const destacados = CARTA.filter((p) => p.destacado);

  return (
    <main>
      <section className="hero container">
        <span className="hero-eyebrow">Cocina de barrio · Vallecas, Madrid</span>
        <h1 className="display">
          Comer bien.
          <span className="rojo">Aquí y ahora.</span>
        </h1>
        <p className="hero-sub">
          Guisos hechos esta mañana y nuestro cachopo, en tu mesa en menos de
          una hora. Directo de nuestra cocina, sin intermediarios.
        </p>
        <div className="hero-cta-row">
          <Link href="/carta" className="btn" style={{ fontSize: "1.1rem" }}>
            Ver carta y pedir
          </Link>
        </div>

        <div className="ticket">
          <h3>¿Llegamos a tu casa?</h3>
          <CPChecker />
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2 className="display">Los que triunfan</h2>
          <span className="hilo" aria-hidden />
        </div>
        <div className="grid">
          {destacados.map((p) => (
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

      <section className="hogar section">
        <div className="container">
          <h2 className="display">¿Quién cocina tu comida?</h2>
          <p>
            Somos una cocina de barrio en Vallecas. Guisamos cada mañana como
            se hacía en casa: sin prisas, con producto de verdad y recetas de
            toda la vida. Pedir aquí, en nuestra web, es la forma más directa
            de apoyarnos.
          </p>
        </div>
      </section>
    </main>
  );
}
