/**
 * Simula un proceso de inicio de sesion que permita 
 * máximo 3 intentos.
 * Cada intento pedirá una contraseña a través
 * de un prompt 
 * Si el usuario ingresa "admin123", 
 * muestra "Acceso concedido"
 * Si falla las 3 veces, muestra el mensaje
 * "Cuenta bloqueada"
 */

const passValidas = ["admin123"];
let intentos =0;
let acceso = false;
do{
   //Pedir contraseña 
    let entrada = prompt("Ingresa tu contraseña:");
    //Verificar la contraseña
   if (passValidas.includes(entrada)) {
        console.log("Acceso concedido");
        acceso = true;
        break;//salir del ciclo si es correcto
    }else{
        intentos ++;
        console.log(`Intento ${intentos} :Contraseña invalida`);
    }
}while(intentos <3){
    if(!acceso){
        console.log("Cuenta bloqueada");
    }
}