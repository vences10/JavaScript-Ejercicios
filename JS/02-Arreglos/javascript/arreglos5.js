/**
 * Dado un arreglo de contraseñas, recorre cada una de ellas
 * y muestra en consola si cumle con la siguiente regla:
 * contiene al menos 8 caracteres
 */

const arreglo = ["admin", "clave1234", "pass", "supersegura123"];

for (let i = 0; i < arreglo.length; i++){
  //console.log(arreglo[i]);
  if (arreglo[i].length >= 8) {
    console.log(`Contraseña ${i+1} sí cumple`);
  } else {
    console.log(`Contraseña ${i+1} no cumple`);
  }
}

