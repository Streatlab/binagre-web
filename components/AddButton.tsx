"use client";

import { Plato } from "@/lib/menu";
import { useCart } from "./CartContext";

export default function AddButton({ plato }: { plato: Plato }) {
  const { add } = useCart();
  return (
    <button className="btn" onClick={() => add(plato)} aria-label={`Añadir ${plato.nombre}`}>
      Añadir
    </button>
  );
}
