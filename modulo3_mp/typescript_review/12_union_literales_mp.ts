// Union de literales: más simple, cero código JS generado
type EstadoServicio = "pendiente" | "procesando" | "completado" | "error";
type PrioridadServicio = "baja" | "media" | "alta";

function procesarServicio(id: number, estado: EstadoServicio): void {
  console.log(`Servicio #${id}: ${estado}`);
}

procesarServicio(1, "procesando"); // ok
// procesarServicio(2, "cancelado"); // Error de compilación: no es un Estado válido

// EJEMPLO

type PrioridadTraslado = "baja" | "media" | "alta" | "critica";

interface Traslado {
  id: number;
  titulo: string;
  prioridad: PrioridadTraslado;
  resuelto: boolean;
}

function etiquetarTraslado(t: Traslado): string {
  const prefijos: Record<PrioridadTraslado, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };
  const estado = t.resuelto ? "✅" : "⏳";
  return `${estado} ${prefijos[t.prioridad]} [#${t.id}] ${t.titulo}`;
}

const traslados: Traslado[] = [
  { id: 1, titulo: "Preparacion cuerpo",  prioridad: "baja",    resuelto: true  },
  { id: 2, titulo: "Falta ataud",         prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Lentitud en cortejo",  prioridad: "media",   resuelto: false },
];

for (const t of traslados) {
  console.log(etiquetarTraslado(t));
}
// ✅ ⚪ [#1] Preparacion cuerpo
// ⏳ 🔴 [#2] Falta ataud
// ⏳ 🟡 [#3] Lentitud en cortejo