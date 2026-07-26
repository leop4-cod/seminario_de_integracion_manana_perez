// Concepto puro
class ArticuloFunerario {
  nombre(): string { return "Artículo"; }
  precio(): number { return 0; }
}

class AtaudEstandar extends ArticuloFunerario {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Ataúd Estándar"; }
  override precio(): number { return Math.PI * this.r ** 2; }
}

class UrnaMarmol extends ArticuloFunerario {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Urna de Mármol"; }
  override precio(): number { return (this.base * this.altura) / 2; }
}

class ArregloFloral extends ArticuloFunerario {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Arreglo Floral"; }
  override precio(): number { return this.lado ** 2; }
}

// Array de tipo base — el polimorfismo en acción
const articulos: ArticuloFunerario[] = [
  new AtaudEstandar(3),
  new UrnaMarmol(6, 4),
  new ArregloFloral(5),
];

for (const a of articulos) {
  // TypeScript llama la versión correcta de precio() en cada iteración
  console.log(`${a.nombre()}: precio = ${a.precio().toFixed(2)}`);
}
// Ataúd Estándar: precio = 28.27
// Urna de Mármol: precio = 12.00
// Arreglo Floral: precio = 25.00