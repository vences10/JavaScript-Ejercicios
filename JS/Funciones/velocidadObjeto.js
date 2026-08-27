
/*Calcular la velocidad de un objeto 
*se tiene que dividir la distancia sobre el tiempo
*
*/

let distancia = parseFloat(prompt("Ingresa la distancia"));
console.log(typeof radio)
//let tiempo = parseFloat(prompt("Ingresa el tiempo"));
//let radio = parseFloat((prompt("Ingresa el radio de la esfera:"));

//let distancia= 200;
//let tiempo = 4;

function calcularVelocidad(distancia, tiempo) {
  const velocidad = distancia / tiempo;
  console.log(`FUNCION NORMAL:
    La velocidad es ${velocidad} unidades por tiempo.`);
  return velocidad;
}

calcularVelocidad(distancia, tiempo);

//FUNCION FLECHA PARA CALCULAR VELOCIDAD
const calcularVelocidadFlecha = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  console.log(`FUNCION FLECHA:
    La velocidad es ${velocidad} unidades por tiempo.`);
  return velocidad;
};

// Ejemplo
calcularVelocidadFlecha(distancia, tiempo); 
// La velocidad calculada es 50 unidades por tiempo.

/**
 * 
 * Calcular el Volumen de un a esfera
 * La formula es V=4/3* PI* radio al cubo
 */
//Funcion Normal

let radio=5;
function volumenEsfera(radio) {
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  console.log(`FUNCION NORMAL:
    El volumen de la esfera con radio
     ${radio} es ${volumen.toFixed(2)} unidades cúbicas.`);
  return volumen;
}

// Ejemplo
volumenEsfera(radio); 
// El volumen de la esfera con radio 5 es 523.60 unidades cúbicas.


//Funcion Flecha
const volumenEsferaFlecha = (radio) => {
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  console.log(`FUNCION FLECHA:
    El volumen de la esfera con radio
     ${radio} es ${volumen.toFixed(2)} unidades cúbicas.`);
  return volumen;
};

// Ejemplo
volumenEsferaFlecha(radio); 
// Volumen calculado: 113.10 unidades cúbicas para radio 3.