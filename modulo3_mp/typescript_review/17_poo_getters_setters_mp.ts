// Concepto puro
class Ataud {
  private _largo: number;

  constructor(largo: number) {
    this._largo = largo;
  }

  get largo(): number {
    return this._largo;
  }

  set largo(valor: number) {
    if (valor <= 0) throw new Error("El largo debe ser positivo");
    this._largo = valor;
  }

  get volumen(): number {
    return Math.PI * this._largo ** 2;
  }
}

const a = new Ataud(5);
console.log(a.largo);          // 5   ← usa el getter
console.log(a.volumen.toFixed(2)); // 78.54

a.largo = 10;                  // usa el setter
console.log(a.volumen.toFixed(2)); // 314.16

// a.largo = -3;  // Error: El largo debe ser positivo