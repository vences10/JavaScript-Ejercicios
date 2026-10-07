package org.generation;

import org.generation.entidades.ProductoDigital;
import org.generation.entidades.ProductoFisico;

public class ProductosApp {
    public static void main(String[] args) {

        ProductoFisico prod1 =new ProductoFisico("", 0.0, 0,0);
        ProductoFisico prod2 =new ProductoFisico("Toalla", 55.77, 5,1);
        ProductoFisico prod3 =new ProductoFisico("Disco", 14.99, 20,0.100);

        ProductoDigital prod4 = new ProductoDigital("", 0.0, "",0.0);
        ProductoDigital prod5 = new ProductoDigital("", 0.0, "",0.0);
        //Producto prod1 = new Producto("",0.0);
        //Producto prod2 = new Producto("Toalla",50.77);
        //Producto prod3 = new Producto("Disco",14.99);

        prod3.mostrarInfo();
        prod2.mostrarInfo();
        prod3.mostrarInfo();

    }//main
}//Class ProductsApp
