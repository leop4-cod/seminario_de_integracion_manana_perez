// Concepto puro
class ServicioFunerario {
  constructor(public nombre: string) {}

  describirServicio(): string {
    return `${this.nombre} ha sido preparado.`;
  }
}

class Velorio extends ServicioFunerario {
  constructor(nombre: string, public tipoSala: string) {
    super(nombre); // llama al constructor del padre
  }

  // override sobrescribe el método del padre
  override describirServicio(): string {
    return `${this.nombre} está listo en sala: ¡Ampliamente!`;
  }

  asignarFlor(flor: string): string {
    return `${this.nombre} tiene el adorno floral ${flor}.`;
  }
}

const s = new ServicioFunerario("Servicio Básico");
const v = new Velorio("Despedida", "VIP");

console.log(s.describirServicio());       // Servicio Básico ha sido preparado.
console.log(v.describirServicio());       // Despedida está listo en sala: ¡Ampliamente!
console.log(v.asignarFlor("Rosas Rojas")); // Despedida tiene el adorno floral Rosas Rojas.
console.log(v.tipoSala);           // VIP