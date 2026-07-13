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
        <h1 className="display" style={{ fontSize: "2.4rem", color: "var(--rojo)" }}>Tu pedido</h1>
        <p style={{ margin: "16px 0 24px" }}>Todavía no has añadido nada.</p>
        <Link href="/carta" className="btn">Ver la carta</Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
        Tu pedido
      </h1>

      <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
        {lineas.map((l) => (
          <div className="linea" key={l.plato.id}>
            <span style={{ fontSize: "1.7rem" }}>{l.plato.emoji}</span>
            <div style={{ flex: 1 }}>
              <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
                {l.plato.nombre}
              </strong>
              <div style={{ fontSize: "0.9rem" }}>{fmtEur(l.plato.precio)}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button className="qty-btn" onClick={() => setQty(l.plato.id, l.qty - 1)} aria-label="Menos">−</button>
              <strong>{l.qty}</strong>
              <button className="qty-btn" onClick={() => setQty(l.plato.id, l.qty + 1)} aria-label="Más">+</button>
            </div>
            <button
              onClick={() => remove(l.plato.id)}
              aria-label="Quitar"
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.05rem" }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <p className="price" style={{ fontSize: "1.5rem", marginBottom: 28 }}>
        Total: {fmtEur(total)}
      </p>

      <h2 className="display" style={{ marginBottom: 8, color: "var(--rojo)" }}>Datos de entrega</h2>
      <p style={{ fontSize: "0.94rem", marginBottom: 14 }}>
        Sin registro. Solo lo necesario para llevarte la comida.
      </p>
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
