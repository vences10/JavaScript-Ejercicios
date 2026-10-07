package org.generation.entidades;

public abstract class Producto {
        private long id;
        private static long total;
        private String nombre;
        private double precio;

        public Producto(String nombre, double precio) {
            Producto.total++;
            this.id = Producto.total;//1
            this.nombre = (nombre.isBlank()) ? "GENÉRICO" : nombre.toUpperCase();
            this.precio = (precio <= 0) ? 1.0 : precio;
        }//constructor Producto

/*==================
GETER y SETER
===================*/

    public long getId() {
        return id;
    }

    public static long getTotal() {
        return total;
    }


    public String getNombre() {
        return nombre;
    }//getNombre

    public void setNombre(String nombre) {
        if(nombre.isBlank()) {
            System.out.println("> ERROR: El nombre no puede ir vacío.");
        }else{
            this.nombre = nombre.toUpperCase();
        }
    }//setNombre

    public double getPrecio() {
        return precio;
    }//getPrecio

    public void setPrecio(double precio) {
        if(precio <= 0) {
            System.out.println("> ERROR: El precio no puede ser cero ó negativo.");
        }else{
            this.precio = precio;
        }//else

    }//setPrecio

    public void mostrarInfo(){
        System.out.println("\n========= Detalles del producto =========");
        System.out.println("Id" + this.getId());
        System.out.println("Nombre: " + this.getNombre());
        System.out.println("Precio: " + this.getPrecio());
        System.out.println("==========================================");
    }//mostrarInfo

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", precio=" + precio +
                '}';
    }// to String
}//class Producto
