// Concepto puro
class FacturaFuneraria {
  readonly id: string;           // no cambia tras la creación
  public cliente: string;        // visible desde fuera
  private total: number;         // solo accesible dentro de la clase
  protected moneda: string;      // accesible también en subclases

  constructor(id: string, cliente: string, totalInicial: number) {
    this.id = id;
    this.cliente = cliente;
    this.total = totalInicial;
    this.moneda = "MXN";
  }

  // Método público que expone el total de forma controlada
  obtenerTotal(): number {
    return this.total;
  }

  agregarCargo(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.total += monto;
  }
}

const factura = new FacturaFuneraria("FAC-001", "Familia García", 1000);
console.log(factura.cliente);         // Familia García
console.log(factura.id);              // FAC-001
console.log(factura.obtenerTotal());  // 1000
factura.agregarCargo(500);
console.log(factura.obtenerTotal());  // 1500


// factura.total = 9999;  // Error: 'total' is private
// factura.id = "otro";   // Error: 'id' is readonly