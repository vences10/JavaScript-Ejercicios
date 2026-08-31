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
        console.log(`
        id persona: ${this.id},
        nombre completo: ${this.nombre},
        correo de contacto: ${this.email}`);

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

calcularTotal() {
        let total = this.carrito.reduce((suma, producto) => suma + producto.precio, 0);
        return total;
    }

}//class Persona


// Clase Usuario (hereda de Persona)
class Usuario extends Persona {
    constructor(id, nombre, email) {
        super(id, nombre, email); // Llama al constructor de Persona
        this.tipo = "Regular";
    }

    // Sobreescribimos calcularTotal
    calcularTotal() {
        let total = super.calcularTotal();
        // Envío gratis si el total es mayor a 299.99
        if (total > 299.99) {
            console.log("Envío gratis aplicado.");
        }
        return total;
    }
}
// Clase UsuarioPro (hereda de Persona)
class UsuarioPro extends Persona {
    constructor(id, nombre, email) {
        super(id, nombre, email);
        this.tipo = "Pro";
    }

    calcularTotal() {
        let total = super.calcularTotal();
        // Envío gratis si el total es mayor a 199.99
        if (total > 199.99) {
            console.log("Envío gratis aplicado.");
        }
        // Descuento del 5% en todas las órdenes
        total = total * 0.95;
        return total;
    }
}

//Creamos al cliente 1
const cliente1 = new Usuario(1, "Carlos", "carlos@mail.com");
cliente1.agregarProductos([
    {nombre:"Pizza", precio:150},
     {nombre:"Refresco", precio:180}
    ]);
// Mostrar datos del cliente
console.log(`Cliente: ${cliente1.nombre}`);
// Recorrer el carrito y mostrar cada producto
cliente1.carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});
console.log("Total Usuario Regular:", cliente1.calcularTotal());
console.log(`------------------`);
//------------------------------------------------------
//Creamos al cliente 2
const cliente2 = new UsuarioPro(2, "Julia", "julia@mail.com");
cliente2.agregarProductos([{nombre:"Hamburguesa", precio:120},
     {nombre:"Papas", precio:100}]);
    // Mostrar datos del cliente
     console.log(`Cliente: ${cliente2.nombre}`);
     // Recorrer el carrito y mostrar cada producto
    cliente2.carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre},
         Precio: $${producto.precio}`);
    });
    //Muestra si el usuario es Pro y su total
console.log("Total Usuario Pro:", cliente2.calcularTotal());

