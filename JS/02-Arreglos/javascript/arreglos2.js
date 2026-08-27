const colores = ["Rojo", "Verde", "Azul","Amarillo"];
const numerosPares = [0,2,4,6,8,10];
const personas=["Ana", "Pablo", "Mairicio", "Juana", "Ana", "Ana"];


//Agregar elementos

//push-> agrega un elemento al final del arreglo
colores.push("Café");
//console.log(colores);
//unshift-> agrega un elemento al inicio del arreglo
colores.unshift("Morado");
//console.log(colores);

//pop-> elimina el último elemento del arreglo
colores.pop();
//console.log(colores);

//shift-> elimina el primer elemento del arreglo
colores.shift();//se elimina morado
//console.log(colores);


 //console.log(colores);

 //Métodos iterativos

//forEach ->Ejecuta una operación sobre todos los elementos del array

 colores.forEach(function (color){
 console.log(color.toUpperCase());
 });

 personas.forEach((persona) => console.log(persona.toUpperCase()));

 //map ->Hace lo mismo que forEach, pero devuelve un nuevo arreglo nuevo

 const numerosImpares = numerosPares.map((numero) => numero + 1);

 console.log(numerosImpares);

// filter ->Evalúa cada elemento con una condición y guarda 
// cada elemento que cumpla con esa condición en un arreglo nuevo

const filtro = personas.filter((persona) => persona === "Ana");
console.log(filtro);