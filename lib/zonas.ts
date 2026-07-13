// ZONA DE REPARTO — PLACEHOLDER EDITABLE por Rubén.
// CPs iniciales alrededor de Vallecas. Ajustar según radio real de envío.

export const CPS_REPARTO = [
  "28018", // Puente de Vallecas
  "28031", // Villa de Vallecas
  "28038", // Puente de Vallecas
  "28053", // Puente de Vallecas
  "28030", // Moratalaz
  "28007", // Retiro
  "28009", // Retiro
  "28045", // Arganzuela
];

export const cpValido = (cp: string) => CPS_REPARTO.includes(cp.trim());
