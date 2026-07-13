// CARTA BINAGRE — PLACEHOLDER EDITABLE.
// Fase siguiente: esta carta se carga desde Supabase y se edita desde el ERP.
// Precios y platos de ejemplo: Rubén valida antes de publicar.

export type Plato = {
  id: string;
  nombre: string;
  desc: string;
  precio: number; // euros
  categoria: "Guisos" | "El Cachopo" | "Combos" | "Postres";
  emoji: string;
  destacado?: boolean;
};

export const CARTA: Plato[] = [
  {
    id: "cachopo-ternera",
    nombre: "Cachopo de ternera",
    desc: "Nuestro clásico: ternera, jamón serrano y queso fundente. Para compartir (o no).",
    precio: 16.9,
    categoria: "El Cachopo",
    emoji: "🥩",
    destacado: true,
  },
  {
    id: "carrilleras",
    nombre: "Carrilleras al vino tinto",
    desc: "Guisadas a fuego lento hasta deshacerse. Con puré casero.",
    precio: 12.9,
    categoria: "Guisos",
    emoji: "🍷",
    destacado: true,
  },
  {
    id: "lentejas",
    nombre: "Lentejas con chorizo",
    desc: "Como en casa. Cuchara obligatoria.",
    precio: 9.9,
    categoria: "Guisos",
    emoji: "🥘",
  },
  {
    id: "albondigas",
    nombre: "Albóndigas de la abuela",
    desc: "En salsa española, con patatas fritas caseras.",
    precio: 10.9,
    categoria: "Guisos",
    emoji: "🍲",
    destacado: true,
  },
  {
    id: "pisto",
    nombre: "Pisto con huevo",
    desc: "Verdura guisada despacio, huevo a baja temperatura.",
    precio: 9.5,
    categoria: "Guisos",
    emoji: "🍳",
  },
  {
    id: "combo-2",
    nombre: "Combo 2 personas",
    desc: "Dos principales + dos postres. Precio cerrado, cero dudas.",
    precio: 24.9,
    categoria: "Combos",
    emoji: "👫",
  },
  {
    id: "combo-familia",
    nombre: "Formato familia",
    desc: "Cuatro raciones generosas + postres. La mesa llena.",
    precio: 44.9,
    categoria: "Combos",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: "torrija",
    nombre: "Torrija caramelizada",
    desc: "Brioche empapado, azúcar tostado por encima.",
    precio: 4.9,
    categoria: "Postres",
    emoji: "🍮",
  },
  {
    id: "flan",
    nombre: "Flan casero",
    desc: "De huevo de verdad, con nata si quieres.",
    precio: 3.9,
    categoria: "Postres",
    emoji: "🍯",
  },
];

export const CATEGORIAS: Plato["categoria"][] = [
  "El Cachopo",
  "Guisos",
  "Combos",
  "Postres",
];

export const fmtEur = (n: number) =>
  n.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
