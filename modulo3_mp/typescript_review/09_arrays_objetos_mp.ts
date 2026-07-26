// Concepto puro
type Ataud = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  existencia: number,
};

const catalogo: Ataud[] = [
  { id: 1, nombre: "Ataud de Roble",  precio: 999,  disponible: true, existencia: 5 },
  { id: 2, nombre: "Urna Simple",   precio: 25,   disponible: true, existencia: 3 },
  { id: 3, nombre: "Servicio Premium", precio: 350,  disponible: false, existencia: 2 },
  { id: 4, nombre: "Flores",   precio: 25,   disponible: true, existencia: 15 },
  { id: 5, nombre: "Lapida", precio: 350,  disponible: false, existencia: 115 },
];

// TypeScript sabe que cada "p" es de tipo Ataud
const disponibles: Ataud[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Ataud | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombres);                  // ["Ataud de Roble", "Urna Simple", "Servicio Premium", "Flores", "Lapida"]
console.log(masBarato?.nombre);       // "Urna Simple"
console.log(disponibles.length);      // 3
console.log(catalogo);
console.log(catalogo[3].existencia);
