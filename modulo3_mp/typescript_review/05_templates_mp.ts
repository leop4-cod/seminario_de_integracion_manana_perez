// Concepto puro — template literals (backtick ``)
const nombreDifunto: string = "Ana";
const tipoAtaud: string    = "Caoba";
const asistentes: number = 42;

// Interpola cualquier expresión con ${ }
const mensajeDespedida: string = `Despedida de ${nombreDifunto}. Ataúd: ${tipoAtaud}. Asistentes esperados: ${asistentes}.`;
console.log(mensajeDespedida);
// Despedida de Ana. Ataúd: Caoba. Asistentes esperados: 42.

// Expresiones dentro de ${ }
const costoAtaud: number = 1200;
const impuesto: number    = 0.19;
const costoTotal: string  = `Costo con impuesto: $${(costoAtaud * (1 + impuesto)).toFixed(2)}`;
console.log(costoTotal);
// Costo con impuesto: $1428.00

// Multi-línea — sin concatenación ni \n
let salaVelatoria: string="Sala-B";
let salaActiva: boolean=true
let limpiezaProgreso: number=99.5;

const reporteSala: string = `
=== Reporte de Sala ===
Sala     : Sala-A
Estado   : ocupada
Limpieza : 100%
`;
console.log(reporteSala);
const reporteSala2: string = `
=== Reporte de Sala ===
Sala     : ${salaVelatoria}
Estado   : ${salaActiva?"Ocupada":"Libre"}
Limpieza : ${limpiezaProgreso}%
`;
console.log(reporteSala2);