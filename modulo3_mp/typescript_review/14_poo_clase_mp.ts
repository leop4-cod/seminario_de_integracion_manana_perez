// Concepto puro
class ServicioFunerario {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const ataudRoble = new ServicioFunerario("Ataud de Roble", 1200, true);
const urnaBronce = new ServicioFunerario("Urna de Bronce", 4500, false);

console.log(ataudRoble.describir()); // Ataud de Roble — $1200 (disponible)
console.log(urnaBronce.describir()); // Urna de Bronce — $4500 (agotado)