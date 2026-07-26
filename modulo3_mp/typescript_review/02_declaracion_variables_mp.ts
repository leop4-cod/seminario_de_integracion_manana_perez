// const — valor que NO cambia (preferida por defecto)
const PI: number = 3.14159;
const NOMBRE_FUNERARIA: string = "FunerariaApp";
const MODO_VELATORIO: boolean = false;

// let — valor que SÍ puede cambiar
let ataudesDisponibles: number = 0;
let estadoSala: string = "desocupada";
let difuntoRegistrado: boolean = false;

console.log(`ataudes disponibles : ${ataudesDisponibles} 
    estado sala: ${estadoSala} 
    difunto registrado : ${difuntoRegistrado}`);

ataudesDisponibles++;                         // 1
estadoSala = "ocupada";       // ok
difuntoRegistrado = true;               // ok

console.log(`ataudes disponibles : ${ataudesDisponibles} 
    estado sala: ${estadoSala} 
    difunto registrado : ${difuntoRegistrado}`);

// PI = 3;  // ← Error: Cannot assign to 'PI' because it is a constant.