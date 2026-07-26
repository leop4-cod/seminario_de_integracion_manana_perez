// NUMERICO
// Concepto puro
const cantidadSillas: number = 42;
const costoFlor: number = 3.14;
const deudaCliente: number = -100;
const colorUrnaHex: number = 0xff;   // 255 en base 16
const codigoLote: number = 0b1010;     // 10 en base 2
const salaOctal: number = 0o17;         // 15 en base 8
const precioMausoleo: number = 1_000_000;   // _ como separador visual (ES2021)

console.log(colorUrnaHex); // 255
console.log(codigoLote);     // 10
console.log(precioMausoleo);      // 1000000

// Constantes especiales de number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isFinite(1 / 0)); // false (Infinity no es finito)
console.log(Number.isNaN(0 / 0));    // true


// STRING
// Concepto puro
const mensajeLapida: string = "Descanse en Paz";
const mensajeAlternativo: string = 'Siempre en nuestros corazones';
const obituario: string = `Adiós ${"mundo"}`; // template literal

const nombreFamiliar: string = "Ana";
const edadDifunto: number = 88;

// Interpolación: embebe expresiones dentro de ${}
const saludoCondolencias: string = `Mis condolencias, ${nombreFamiliar}. Vivió ${edadDifunto} años.`;
const tipoServicio: string = `Requiere un servicio ${edadDifunto >= 18 ? "adulto" : "infantil"}.`;

// Multilínea sin caracteres de escape
const poemaDespedida: string = `
  Que la tierra
  te sea
  leve
`.trim();

// Métodos comunes (tipados, el editor autocompleta)
console.log("  amen  ".trim());         // "amen"
console.log("amen".toUpperCase());      // "AMEN"
console.log("AMEN".toLowerCase());      // "amen"
console.log("2024-06-15".split("-"));   // ["2024", "06", "15"]
console.log("error: pago fallido".includes("error")); // true
console.log("acta_defuncion.pdf".endsWith(".pdf"));     // true
console.log("acta_defuncion.pdf".startsWith(".pdf"));     // false

// BOOLEAN
// Concepto puro
const pagoCompletado: boolean = true;
const ceremoniaCancelada: boolean = false;

// Se infiere sin anotación explícita
const esAtaudPremium = 2500 >= 1800;    // boolean inferido → true
const hayFlores = 0 > 0;    // boolean inferido → false

// Valores "falsy" en TypeScript/JavaScript (importantes para narrowing)
// false, 0, "", null, undefined, NaN → todos se comportan como false en un if
if (!hayFlores) {
  console.log("Sin flores disponibles");
}


// NULL AND UNDEFINED
// Concepto puro
let lapidaSinGrabar: undefined = undefined;
let parcelaVacia: null = null;

// En la práctica: propiedades opcionales o resultados de búsqueda
function buscarDifunto(id: number): string | null {
  if (id === 1) return "Ana";
  return null; // encontrado = null cuando no existe
}

const difuntoBuscado = buscarDifunto(5);

// Operador de coalescencia nula ?? (devuelve el lado derecho si el izquierdo es null/undefined)
const nombreMostrar = difuntoBuscado ?? "Desconocido";
console.log(nombreMostrar); // "Desconocido"

// Encadenamiento opcional ?. (no lanza error si algo es null/undefined)
const longitudNombre = nombreMostrar?.length;
console.log(longitudNombre); // undefined (no lanza error)