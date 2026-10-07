  /**
     * para validar correo se utiliza las expresiones regulares
     * Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda.
     * Se utiliza para validar cadenas de texto, por ejemplo: 
     * comprobar si un correo tiene el formato correcto o si un nombre cumple con ciertas reglas.
     * 
     * regex aquí es un objeto de tipo RegExp.
     * El patrón /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/ describe 
     * cómo debe lucir un correo válido.
     * test(correo) devuelve true si el texto coincide con el patrón, o false si no.
     **/

// Función para validar nombre
export function validarNombre(nombre) {
  const regex = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]{3,}$/;
  return regex.test(nombre);
}

// Función para validar correo
export function validarCorreo(correo) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(correo);
}

/*
* `^`: Indica el inicio de la cadena de texto.
* `[a-zA-Z0-9._%+-]+`: Permite letras, números, puntos, guiones bajos, porcentajes y signos más o menos en el nombre de usuario (la parte antes de la `@`).
* `@`: Busca el símbolo de la arroba de forma obligatoria.
* `[a-zA-Z0-9.-]+`: Permite letras, números, puntos y guiones para el dominio.
* `\.`: Obliga la presencia de un punto literal antes de la extensión del país o servidor.
* `[a-zA-Z]{2,}`: Asegura que la extensión final (como `.com`, `.org`, etc.) tenga al menos dos letras.
* `$`: Indica el final de la cadena de texto.
*/