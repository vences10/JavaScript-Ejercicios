


const  calificaciones  = [4.3,5.0,4.1,4.4,3.1,4.0];
let promedio;
let suma=0;


//tambien es lo mismo que escribir suma = suma + numeros[i];
//Lo que hace es sumar el valor actual de suma con el elemento 
// del arreglo y guardar el resultado nuevamente en suma.
// Iteración 1: i = 0 → suma = 0 + 10 = 10
// Iteración 2: i = 1 → suma = 10 + 20 = 30
// Iteración 3: i = 2 → suma = 30 + 30 = 60

for (i=0; i<calificaciones.length;i++){
   suma += calificaciones[i];
}
   console.log(`La suma es ${suma}`);

//promedio = (la suma de todas las calificaciones) / el número de calificaciones
   promedio = (suma /calificaciones.length).toFixed(1);

   console.log(`El promedio es ${promedio}`);

