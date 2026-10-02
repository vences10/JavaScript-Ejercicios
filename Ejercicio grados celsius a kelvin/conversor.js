// Conversor de temperaturas en JavaScript

// Fórmulas:
// Fahrenheit = (Celsius × 1.8) + 32
// Kelvin = Celsius + 273.15

function conversorTemperatura(tempC) {
    let tempF = (tempC * 1.8) + 32;
    let tempK = tempC + 273.15;

    alert("La temperatura en °Fahrenheit es: " + tempF);
    alert("La temperatura en Kelvin es: " + tempK);
// También se puede mostrar en la consola
    console.log("La temperatura en °Fahrenheit es: " + tempF);
    console.log("La temperatura en Kelvin es: " + tempK);
}

// Ejemplo de uso con prompt (en navegador)
let tempC = parseFloat(prompt("Ingresa el valor de la temperatura en °Celsius:"));
conversorTemperatura(tempC);