let distancia = parseFloat(prompt("Ingresa el valor de la distancia"));
let tiempo = parseFloat(prompt("Ingresa el valor del tiempo"));
let velocidad;

//funcion común; multiples instrucciones
function calcularVelocidad(distancia, tiempo){
    let v= distancia/tiempo;
    return v;
}


//funcion flecha: una sola instruccion o funciones sencillas
const calcularVelocidad2 =(distancia,tiempo)=> console.log(distancia/tiempo);

velocidad =(calcularVelocidad(distancia,tiempo)).toFixed(2);

console.log(`Distancia: ${distancia} metros, timepo: ${tiempo} segundos.
    velocidad:${velocidad} m/s al 2`);


calcularVelocidad2(distancia,tiempo);
