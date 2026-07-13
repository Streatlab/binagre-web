"use client";

import { useState } from "react";
import { cpValido } from "@/lib/zonas";

export default function CPChecker() {
  const [cp, setCp] = useState("");
  const [estado, setEstado] = useState<"idle" | "ok" | "ko">("idle");

  const comprobar = () => {
    if (!/^\d{5}$/.test(cp.trim())) return setEstado("ko");
    setEstado(cpValido(cp) ? "ok" : "ko");
  };

  return (
    <div>
      <div className="cp-row">
        <input
          className="input"
          inputMode="numeric"
          maxLength={5}
          placeholder="Tu código postal"
          value={cp}
          onChange={(e) => { setCp(e.target.value); setEstado("idle"); }}
          onKeyDown={(e) => e.key === "Enter" && comprobar()}
        />
        <button className="btn btn-secondary" onClick={comprobar}>
          Comprobar
        </button>
      </div>
      {estado === "ok" && (
        <p className="note-ok" style={{ marginTop: 10 }}>
          ✓ Llegamos a tu casa. Entrega estimada: 35–50 min.
        </p>
      )}
      {estado === "ko" && (
        <p className="note-ko" style={{ marginTop: 10 }}>
          Todavía no llegamos ahí. Estamos ampliando zona poco a poco.
        </p>
      )}
    </div>
  );
}
