// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class ContratoFunerario implements Serializable, Validable {
  constructor(
    public id: string,
    public servicios: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, servicios: this.servicios, total: this.total });
  }

  esValido(): boolean {
    return this.servicios.length > 0 && this.total > 0;
  }
}

const contrato = new ContratoFunerario("C-001", ["Cremación", "Flores"], 150);
console.log(contrato.esValido());    // true
console.log(contrato.serializar());
// {"id":"C-001","servicios":["Cremación","Flores"],"total":150}