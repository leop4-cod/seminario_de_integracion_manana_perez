// Sistema de cotización de traslados para una funeraria.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type ZonaTraslado = "local" | "nacional" | "internacional";

interface ServicioTraslado {
  descripcionDifunto: string;
  pesoKg: number;
  costoAtaud: number;
  zona: ZonaTraslado;
}

const TARIFAS_TRASLADO: Record<ZonaTraslado, number> = {
  local:           2.50,   // $ por kg
  nacional:        5.00,
  internacional:  12.00,
};

const SEGURO_TRASLADO_PCT = 0.005;  // 0.5% del costo del ataúd

function cotizarTraslado(servicio: ServicioTraslado): string {
  const tarifaBase = TARIFAS_TRASLADO[servicio.zona];
  const costoTraslado = tarifaBase * servicio.pesoKg;
  const costoSeguro = servicio.costoAtaud * SEGURO_TRASLADO_PCT;
  const total = costoTraslado + costoSeguro;

  return `
📦 Cotización de traslado
   Descripción : ${servicio.descripcionDifunto}
   Peso        : ${servicio.pesoKg} kg
   Zona        : ${servicio.zona}
   Traslado    : $${costoTraslado.toFixed(2)}
   Seguro      : $${costoSeguro.toFixed(2)}
   ─────────────────────────
   TOTAL       : $${total.toFixed(2)}
  `.trim();
}

const traslado1: ServicioTraslado = {
  descripcionDifunto: "Traslado en Ataúd de Cedro",
  pesoKg: 85.5,
  costoAtaud: 1800,
  zona: "nacional",
};

const traslado2: ServicioTraslado = {
  descripcionDifunto: "Traslado de Urna de Cenizas",
  pesoKg: 3.4,
  costoAtaud: 350,
  zona: "internacional",
};

console.log(cotizarTraslado(traslado1));
console.log("---");
console.log(cotizarTraslado(traslado2));

// TS detecta si usas una zona inválida:
// const traslado3: ServicioTraslado = { ..., zona: "express" };
// Type '"express"' is not assignable to type 'ZonaTraslado'.