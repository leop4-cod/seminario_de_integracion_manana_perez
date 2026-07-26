// Concepto puro — dos sintaxis equivalentes
const precios: number[] = [1000, 2000, 3000, 4000, 5000];
const ataudes: Array<string> = ["Roble", "Pino", "Caoba"];   // forma genérica
// TypeScript infiere el tipo del array si lo inicializas
const inferido = [100, 200, 300]; // number[] inferido
console.log(`Arreglo Precios: ${precios}`)
console.log(`Arreglo de Ataudes: ${ataudes}`)
console.log(`Arreglo Inferido: ${inferido}`)
// Métodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = precios.map((n) => n * 2);       // [2000, 4000, 6000, 8000, 10000]
const pares: number[] = precios.filter((n) => n % 2 === 0); // [1000, 2000, 3000, 4000, 5000]
const suma: number = precios.reduce((acc, n) => acc + n, 0); // 15000
console.log(`Dobles: ${dobles}`)
console.log(`Pares: ${pares}`)
console.log(`Dobles: ${suma}`)
// Mutación (cambia el array original)
precios.push(6000);       // agrega al final
console.log(`Arreglo Precios: ${precios}`)
precios.unshift(0);    // agrega al inicio
console.log(`Arreglo Precios: ${precios}`)
const ultimo = precios.pop();   // elimina y devuelve el último
console.log(`Arreglo Precios: ${precios}`)
const primero = precios.shift(); // elimina y devuelve el primero
console.log(`Arreglo Precios: ${precios}`)

// Búsqueda
const existe: boolean = precios.includes(3000);       // true
console.log(`Exite 3000: ${existe}`)
const indice: number = precios.indexOf(3000);         // posición o -1
console.log(`Posición del valor 3000: ${indice}`)
const encontrado: number | undefined = precios.find((n) => n > 4000); // 5000
console.log(`Valor encontrado mayor a 4000: ${indice}`)