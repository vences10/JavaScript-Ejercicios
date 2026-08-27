//Arreglos

/**
 * Los elementos de un arreglo tienen una relación entre si.
 * 
 * Los elementos dentro de un arreglo usan el mismo tipo de dato.
 * 
 * Un arreglo tiene longitud y posiciones.
 * 
 * Longitud: total de elementos que tiene el array.
 * 
 */

//Declarar un arreglo
const colores = ["Rojo", "Verde", "Azul","Amarillo"];
const numerosPares = [0,2,4,6,8,10];
const validaciones = [true, true, false, false];
const nulo = [null, null, null];


//[1, 2, 3] ocupa la posisción 0 y por ejemplo el num2  esta en la posición [0][1]

const matriz = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

const canciones =[{
        nombre:"cancion 1",
        duracion: 1.44
    },
    {
        nombre:"cancion 2",
        duracion: 4.41
    },
    { 
        nombre:"cancion 3",
        duracion: 5.27
    }];


//Conocer la longitud d eun arreglo
console.log(colores.length);

//Monstrar el arrelgo en consola
console.log(colores);

//Mostrar un elemento dentro de mi arrelgo en consola
console.log(colores[3]);

//Modificar un elemento dentro del arreglo
colores[1] = "Morado";
colores [3] = "Rosa";

console.log(matriz[2][1]);
console.log(matriz[1][2]);


console.log (canciones);
console.log (canciones[1]);