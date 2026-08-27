// Variables -Scope
/**
 * El alcance (scope) de una variable se refiere 
 * a las partes de mi codigo donde puedo acceder, leer o modificar una variable.
 * 
 * Puedo acceder a un avariable DESPUÉS de su declaración.
 * 
 * Global: La variable puede ser accedida en cualquier parte del programa.
 * Local: Cuando declaramos un a variable dentro de una función
 */

let nombre ="Fer";
nombre ="Alberto";

console.log(nombre);


function imprimirMayusculas(nombre){ //imprimir mayusculas
    console.log(nombre.toUpperCase());
}

imprimirMayusculas(nombre);


function sumar(){
    let num1 = 5;
    let num2 = 10;
    num2 =20;
    console.log("Suma " + (num1 + num2));

}//sumar

sumar();

