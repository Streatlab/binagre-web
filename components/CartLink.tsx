"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartLink({ block = false }: { block?: boolean }) {
  const { count } = useCart();
  return (
    <Link href="/carrito" className={`btn ${block ? "btn-block" : ""}`}>
      Pedir{count > 0 ? ` · ${count}` : ""}
    </Link>
  );
}
