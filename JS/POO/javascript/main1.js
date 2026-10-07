//class nombredelaClase {}
//Estamos escribiendo una plantilla o sea la clase
class Persona {
    // Propiedades de mi clase
    // id es una propiedad que queremos q tenga el objeto por eso no lleva let
    id;
    nombre;
    email;
    carrito;

    //Constructor vamos a crear un objeto de tipo Persona
    constructor (id,nombre,email){
        //hace referencia a la clase Persona (this= esta clase)
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.email = email;
        this.carrito = [];
    }//constructor Persona

    
    //Metodo Mostrar clase
    mostrarDatos(){
        //código a ejecutar
        console.log(`id persona: ${this.id},nombre completo: ${this.nombre}, correo de contacto: ${this.email}`);
    }//mostrar datos

    //Método agregarproducto
    agregarProducto(producto){
        this.carrito.push(producto);
    }//agregar producto

       //Método agregarproductos
    agregarProductos(productos){
        productos.forEach(producto => 
            {this.carrito.push(producto)});
    }//agregar productos

    //polimorfismo y abstracción
    calcularTotal() {}

}//class Persona

// Clase Usuario (hereda de Persona)
class Usuario extends Persona {
//propiedad tipo no es una variable pero se declara así  por POO
tipo;//es muy particular de la clase usuario
    constructor(id, nombre, email) {
        // Llama al constructor de Persona, se utiliza super porque por defecto en 
        // POO al llamar a la clase padre su utiliza la palabra super
        super(id, nombre, email); 
        this.tipo = "Normal";
    }

    // Sobreescribimos calcularTotal
    calcularTotal() {
       console.log("Calculando el precio total para USUARIO NORMAL");
    }
}

// Clase UsuarioPro (hereda de Persona)
class UsuarioPro extends Persona {
    constructor(id, nombre, email) {
        super(id, nombre, email);
        this.tipo = "Pro";
    }
    calcularTotal() {    
    // Descuento del 5% en todas las órdenes
            console.log("Usuario PRO: descuento del 5%, etc...calculando");
        }  
}//class Usuario Pro


class Main{
    static main(){
        const julia = new Usuario(124, "Julia Amado", "julia@mail.com");//instancia
        const fer = new UsuarioPro(125,"Fernando Aguilar","fernando@gmail.com");
        julia.agregarProducto("Sabritas");
        fer.agregarProducto("Café");
        console.log(julia);
        console.log(fer);
        julia.calcularTotal();
        fer.calcularTotal();
    }//main
}//clas MAin

Main.main();
