//contrar registros procesados
//cantidad de registros a procesar

// Pedir el n con prompt
let n = parseInt(prompt("Ingresa la cantidad de registros a procesar:"));


function contarRegistros(n) {
  // Creamos un arreglo con n elementos
 const registros = [];

  // Llenamos el arreglo con números del 1 al n
  for (let i = 1; i <= n; i++) {
    registros.push(i);
  }

  // Recorremos el arreglo y mostramos cada proceso
  registros.forEach((proceso) => {
    console.log(`Proceso ${proceso} registrado...`);
  });

  // Mensaje final
  console.log("Todos los procesos han sido registrados con éxito.");
}


contarRegistros(n);