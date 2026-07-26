// ── Anotación explícita ───────────────────────────────────────────────────
// Tú le dices a TS cuál es el tipo.
const salaId: number = 101;
const ubicacion: string = "capilla_principal";
const enServicio: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TS lo deduce del valor inicial — el tipo es el mismo, pero sin escribirlo.
const salaId2 = 101;       // TypeScript infiere: number
const ubicacion2 = "capilla_principal";  // TypeScript infiere: string
const enServicio2 = true;       // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con el tipo incorrecto, TS da error en ambos casos:
// salaId2 = "A1";  // Error: Type 'string' is not assignable to type 'number'.

// ── Cuándo anotar explícitamente ─────────────────────────────────────────
// 1. Variables declaradas sin valor inicial:
let tiempoEspera: number;      // sin inicializar — necesita anotación
tiempoEspera = 45;

// 2. Cuando quieres un tipo más amplio que el valor inicial:
let codigoServicio: number | string = 200;  // acepta número o string
codigoServicio = "ESTANDAR";  // válido

// 3. Parámetros de funciones (TS no puede inferirlos):
function prepararSala(sala: string, flores: number): string {
  return `Sala ${sala} preparada con ${flores} arreglo(s) floral(es)`;
}

// Las variables de estado de un velatorio: cuándo anotar y cuándo inferir.

const NOMBRE_SUCURSAL = "sede-central";   // inferido: string — claro del valor
const CAPACIDAD_MAXIMA  = 50;             // inferido: number
const ABIERTO_24HS   = true;            // inferido: boolean

// Variables que cambian durante la vida del velatorio:
let serviciosAtendidos: number = 0;    // anotación: se inicializa en 0 pero cambia
let ultimoReclamo: string | null = null;   // anotación: puede ser null al inicio

// Función con anotaciones completas (necesarias en parámetros):
function registrarServicio(tipoAtaud: string, costo: number): void {
  serviciosAtendidos++;
  console.log(`[${NOMBRE_SUCURSAL}] Ataúd ${tipoAtaud} por $${costo} — total servicios: ${serviciosAtendidos}`);
}

registrarServicio("Caoba", 2000);
registrarServicio("Pino", 400);
// [sede-central] Ataúd Caoba por $2000 — total servicios: 1
// [sede-central] Ataúd Pino por $400 — total servicios: 2