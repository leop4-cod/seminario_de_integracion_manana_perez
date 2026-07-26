// number — enteros y decimales, positivos y negativos
const precioServicio: number      = 2999.99;
const capacidadSala: number      = 50;
const temperaturaMorgue: number = -5.3;
const colorCocheFunebre: number    = 0x000000;  // también acepta hexadecimal

// string — texto, con comillas simples, dobles o backtick
const emailContacto: string    = "servicios@funerarialapaz.com";
const tipoCeremonia: string = 'Religiosa';
const rutaTraslado: string     = `/cementerio/parcela/24`;

// boolean — solo true o false
const estaDisponible: boolean  = true;
const requiereEmbalsamamiento: boolean = false;
const esCremacion: boolean      = false;

// ── Aritmética con number ─────────────────────────────────────────────────
const subtotalServicio = 1500;
const descuentoAfiliado = 150;
const totalPagar = subtotalServicio - descuentoAfiliado;  // 1350

// ── Métodos de string ─────────────────────────────────────────────────────
const difuntoNombre = "  juan perez  ";
console.log(difuntoNombre.trim().toLowerCase()); // "juan perez"
console.log(emailContacto.includes("funeraria"));    // true
console.log(emailContacto.split("@"));
console.log(emailContacto.split("@")[1]);          // "funerarialapaz.com"
let registros: string = "Pablo;Marmol;85;Cremacion";
console.log(registros.split(";"));

// ── Lógica con boolean ────────────────────────────────────────────────────
const puedeVelarse: boolean = estaDisponible && !requiereEmbalsamamiento;
console.log(puedeVelarse); // true