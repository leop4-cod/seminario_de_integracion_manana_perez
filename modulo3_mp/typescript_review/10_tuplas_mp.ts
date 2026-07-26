// Concepto puro
type CoordenadaParcela = [number, number];           // [sector, parcela]
type RGB = [number, number, number];          // [rojo, verde, azul]
type EntradaCliente = [string, number];              // [nombre, edad]

const punto: CoordenadaParcela = [10.5, -3.2];
const colorCorona: RGB = [255, 128, 0];            // naranja
const par: EntradaCliente = ["Juan Perez", 85];

// Desestructuración (la forma más cómoda de usar tuplas)
const [x, y] = punto;
const [rojo, verde, azul] = colorCorona;
const [clave, valor] = par;

console.log(`Punto: x=${x}, y=${y}`);         // Punto: x=10.5, y=-3.2
console.log(`Color: rgb(${rojo},${verde},${azul})`); // Color: rgb(255,128,0)

// Tuplas con nombre (TS 4.0+) — mejoran la legibilidad
type RangoVelatorio = [inicio: number, fin: number];
const horario: RangoVelatorio = [9, 18];              // de 9:00 a 18:00