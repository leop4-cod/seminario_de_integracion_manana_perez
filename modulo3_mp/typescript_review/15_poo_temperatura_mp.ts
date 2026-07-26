class CostoServicio {
  costoBase: number = 0;
  costoPremium: number = 0;

  constructor(base: number, premium: number) {
    this.costoBase = base ?? 0 ;
    this.costoPremium = premium ?? 0;
  }

  aPremium(): number {
    return this.costoBase * 9 / 5 + 32;
  }

  aBase(): number {
    this.costoBase = (this.costoPremium -32)/ (9 / 5);
    return this.costoBase;
  }

  aVIP(): number {
    return this.costoBase + 273.15;
  }

  describir(): string {
    return (
      `${this.costoBase} Base = ` +
      `${this.aPremium()} Premium = ` +
      `${this.aVIP()} VIP`
    );
  }
}

const ataudRoble = new CostoServicio(100, 0);
const ataudPino = new CostoServicio(0, 0);
const convertirABase = new CostoServicio(0, 50);

console.log(ataudRoble.describir());     // 100 Base = 212 Premium = 373.15 VIP
console.log(ataudPino.describir()); // 0 Base = 32 Premium = 273.15 VIP
console.log(convertirABase.aBase());