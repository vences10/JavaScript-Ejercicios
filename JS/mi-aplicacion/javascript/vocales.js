/**
 * Mini retos lógica de programación:

1. Desarrolla un programa en javascript que, recibiendo como entrada una palabra, pueda determinar cuantas vocales hay en ella.

Ejemplos:

- Ana: 2 vocales
- Computadora: 5 vocales
- Elo: 2 vocales
 */


//const palabra = prompt("Ingresa una palabra");
const palabra = "murcielago";

// El método .match() busca todas las vocales (a, e, i, o, u) sin importar mayúsculas
const vocalesEncontradas = palabra.match(/[aeiouáéíóúü]/gi);

// Evaluamos con un bloque if / else
if (vocalesEncontradas !== null) {
    // Si .match() encontró vocales, guardamos cuántas son
    totalVocales = vocalesEncontradas.length;
} else {
    // Si .match() devolvió null (no hay vocales), el total es 0
    totalVocales = 0;
}

console.log(totalVocales); // Resultado: 5