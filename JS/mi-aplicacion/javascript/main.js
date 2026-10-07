import {Usuario} from "./usuario.js";
import {validarNombre,validarCorreo} from "./validaciones.js";


// Arreglo para almacenar usuarios
const usuarios = [];

let opcion;

do {
    opcion = parseInt(prompt(`
        ---MENU---
    1. Crear usuario
    2. Mostrar usuarios
    3. Buscar usuario
    4. Salir
    Elige una opcion:`
    ));

  if (opcion === 1) {
    const nombre = prompt("Ingresa el nombre:");
    const correo = prompt("Ingresa el correo:");

    if (validarNombre(nombre) && validarCorreo(correo)) {
        //mandamos llamar al constructor usuario nuevo osea creamos un usuario
      const nuevoUsuario = new Usuario(nombre, correo);
      //guardamos el usuario que creamos en el arreglo usuarios
      usuarios.push(nuevoUsuario);
      console.log("Usuario creado correctamente.");
    } else {
      if (!validarNombre(nombre)) {
        console.log("Nombre inválido. Debe tener al menos 3 letras y solo caracteres a-z.");
      }
      if (!validarCorreo(correo)) {
        console.log("Correo inválido. Ejemplo:correo@ejemplo.com.");
      }
    }

  } else if (opcion === 2) {
    console.log("Usuarios registrados:");
    for (let i = 0; i < usuarios.length; i++) {
      console.log(`${i + 1}. ${usuarios[i].nombre} - ${usuarios[i].correo}`);
    }

  } else if (opcion === 3) {
    const nombreBuscar = prompt("Ingresa el nombre que deseas buscar:");
    const encontrado = usuarios.find(usuario => usuario.nombre.toLowerCase() === nombreBuscar.toLowerCase());

    if (encontrado) {
    alert(`Usuario encontrado:
        Nombre: ${encontrado.nombre}
        Correo: ${encontrado.correo}`);

        console.log(`Usuario encontrado:
        Nombre: ${encontrado.nombre}
        Correo: ${encontrado.correo}`);
    } else {
        alert("No se encontró ningún usuario con ese nombre.");
      console.log("No se encontró ningún usuario con ese nombre.");
    }
  }

} while (opcion !== 4);