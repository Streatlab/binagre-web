"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import { fmtEur } from "@/lib/menu";
import { cpValido } from "@/lib/zonas";

export default function Carrito() {
  const { lineas, setQty, remove, total, clear } = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cp, setCp] = useState("");
  const [error, setError] = useState("");

  const pagar = () => {
    if (!lineas.length) return;
    if (!nombre || !telefono || !direccion || !cp) {
      return setError("Rellena todos los datos de entrega.");
    }
    if (!cpValido(cp)) {
      return setError("Ese código postal está fuera de nuestra zona de reparto.");
    }
    setError("");
    // TODO Stripe: crear sesión de pago cuando la cuenta esté activa.
    alert("Pago con tarjeta disponible muy pronto. Estamos activando la pasarela.");
  };

  if (!lineas.length) {
    return (
      <main className="container section" style={{ textAlign: "center" }}>
        <h1 className="display" style={{ color: "var(--bin-red)" }}>Tu pedido</h1>
        <p style={{ margin: "16px 0 24px" }}>Todavía no has añadido nada.</p>
        <Link href="/carta" className="btn">Ver la carta</Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1 className="display" style={{ fontSize: "2.2rem", color: "var(--bin-red)" }}>
        Tu pedido
      </h1>

      <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        {lineas.map((l) => (
          <div
            key={l.plato.id}
            className="card"
            style={{ flexDirection: "row", alignItems: "center", padding: "10px 14px", gap: 12 }}
          >
            <span style={{ fontSize: "1.6rem" }}>{l.plato.emoji}</span>
            <div style={{ flex: 1 }}>
              <strong>{l.plato.nombre}</strong>
              <div style={{ fontSize: "0.9rem" }}>{fmtEur(l.plato.precio)}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button className="btn btn-secondary" onClick={() => setQty(l.plato.id, l.qty - 1)}>−</button>
              <strong>{l.qty}</strong>
              <button className="btn btn-secondary" onClick={() => setQty(l.plato.id, l.qty + 1)}>+</button>
            </div>
            <button onClick={() => remove(l.plato.id)} aria-label="Quitar" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem" }}>✕</button>
          </div>
        ))}
      </div>

      <p className="price" style={{ fontSize: "1.4rem", marginBottom: 24 }}>
        Total: {fmtEur(total)}
      </p>

      <h2 className="display" style={{ marginBottom: 12 }}>Datos de entrega</h2>
      <p style={{ fontSize: "0.92rem", marginBottom: 12 }}>Sin registro. Solo lo necesario para llevarte la comida.</p>
      <div style={{ display: "grid", gap: 12, maxWidth: 480 }}>
        <input className="input" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input className="input" placeholder="Teléfono" inputMode="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <input className="input" placeholder="Dirección (calle, número, piso)" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <input className="input" placeholder="Código postal" inputMode="numeric" maxLength={5} value={cp} onChange={(e) => setCp(e.target.value)} />
        {error && <p className="note-ko">{error}</p>}
        <button className="btn btn-block" style={{ fontSize: "1.1rem" }} onClick={pagar}>
          Pagar {fmtEur(total)}
        </button>
        <button className="btn btn-secondary btn-block" onClick={clear}>Vaciar pedido</button>
      </div>
    </main>
  );
}
