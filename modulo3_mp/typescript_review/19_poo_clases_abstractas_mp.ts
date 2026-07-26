// Concepto puro
abstract class InsumoFunerario {
  abstract calcularCosto(): number;       // sin implementación — las subclases DEBEN implementarlo
  abstract calcularImpuesto(): number;

  // Los métodos concretos SÍ tienen implementación
  describir(): string {
    return (
      `Costo: ${this.calcularCosto().toFixed(2)} | ` +
      `Impuesto: ${this.calcularImpuesto().toFixed(2)}`
    );
  }
}

class Urna extends InsumoFunerario {
  constructor(private peso: number) {
    super();
  }

  override calcularCosto(): number {
    return Math.PI * this.peso ** 2;
  }

  override calcularImpuesto(): number {
    return 2 * Math.PI * this.peso;
  }
}

class Lapida extends InsumoFunerario {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  override calcularCosto(): number {
    return this.ancho * this.alto;
  }

  override calcularImpuesto(): number {
    return 2 * (this.ancho + this.alto);
  }
}

// const i = new InsumoFunerario(); // Error: Cannot create an instance of an abstract class.

const urna = new Urna(5);
const lapida = new Lapida(4, 6);

console.log(urna.describir()); // Costo: 78.54 | Impuesto: 31.42
console.log(lapida.describir());    // Costo: 24.00 | Impuesto: 20.00