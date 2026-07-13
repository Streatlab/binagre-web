"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Plato } from "@/lib/menu";

type Linea = { plato: Plato; qty: number };

type CartCtx = {
  lineas: Linea[];
  add: (p: Plato) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lineas, setLineas] = useState<Linea[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("binagre-cart");
      if (raw) setLineas(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("binagre-cart", JSON.stringify(lineas));
    } catch {}
  }, [lineas]);

  const add = (p: Plato) =>
    setLineas((ls) => {
      const i = ls.findIndex((l) => l.plato.id === p.id);
      if (i >= 0) {
        const copy = [...ls];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
      }
      return [...ls, { plato: p, qty: 1 }];
    });

  const remove = (id: string) => setLineas((ls) => ls.filter((l) => l.plato.id !== id));

  const setQty = (id: string, qty: number) =>
    setLineas((ls) =>
      qty <= 0
        ? ls.filter((l) => l.plato.id !== id)
        : ls.map((l) => (l.plato.id === id ? { ...l, qty } : l))
    );

  const clear = () => setLineas([]);

  const total = lineas.reduce((s, l) => s + l.plato.precio * l.qty, 0);
  const count = lineas.reduce((s, l) => s + l.qty, 0);

  return (
    <Ctx.Provider value={{ lineas, add, remove, setQty, clear, total, count }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart fuera de CartProvider");
  return c;
};
