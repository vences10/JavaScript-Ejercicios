// C:\Users\aguil\Desktop\CH72\Sesiones\JS\01-Variables\javascript
// /javascript/main.js -> absoluta (desde la raíz)
// ./javascript/main.js -> relativa (desde la carpeta actual)


//alert("Probando Live Server... funciona!");
//      console.log("Aqui también se muestra algo...");

//Variables y tipos de dato
//Variables numéricas
 let edad=25;
 let estatura =-1.76;

 console.log(edad);
 console.log(estatura);

//Variable String
//Textos con caracteres alfabeticos, numéricos y especiales

// Variables string
// Textos con caracteres alfabéticos, numéricos y especiales
let nombre = "            Fernando";
let correo = "FER@gMail.Com";
let telefono = "550000000000";
console.log(correo.toLowerCase());
console.log(correo.toUpperCase());
console.log(nombre.trim());

//Variables Booleanas
//Valores lógicos: true, false.

let esHumano = true;
let esInvitado =true;
let estaActivo =false;
let esMayor = true;

//Variables array
//]Lista de valores/elementos que tienen el mismo tipo de dato
//y guardan una relación en tre sí


let colores = ["rojo","verde", "azul"];
let numerosPares = [0, 2, 4, 6, 8, 10, 12];

console.log(numerosPares);

//Variables object
//Representan objetos tangibles/intangibles del mundo real

let pc = {
    cpu: "Intel",
    gpu:"Nvidia",
    ram: 16,
    ssd: 1000,
    so: "Windows",
    marca: "Lenovo",
    esModificable: true
};

console.log(pc);
