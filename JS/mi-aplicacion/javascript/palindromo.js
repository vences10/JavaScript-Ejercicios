/**
 * Mini retos lógica de programación:
2. Escribe un programa en javascript que, recibiendo como entrada una palabra, pueda determinar si es un palíndromo o no.

Palíndromo: palabra que se lee igual al derecho y al revés.

Ejemplos:

Ana -> Palíndromo
Oso -> Palíndromo
Gerardo -> No palíndromo
Torre -> No palíndromo
 */

const palabra = "ana";

// 1. Convertimos la palabra en un arreglo de letras
const letras = [...palabra]; 

// Creamos una variable para guardar el resultado (asumimos que sí lo es)
let esPalindromo = true;

// 2. Usamos un ciclo simple para comparar los extremos
for (let i = 0; i < letras.length / 2; i++) {
    // Letra desde el inicio: letras[i]
    // Letra desde el final: letras[letras.length - 1 - i]
    if (letras[i] !== letras[letras.length - 1 - i]) {
        esPalindromo = false; // Si una sola no coincide, ya no es palíndromo
        break; // Detenemos el ciclo de inmediato
    }
}

// 3. Mostramos el resultado 
if (esPalindromo) {
    console.log("Sí, es un palíndromo");
} else {
    console.log("No, no es un palíndromo");
}