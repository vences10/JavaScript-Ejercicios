package org.generation.entidades;

public class ProductoFisico extends Producto{

    private int cantidad;
    private double peso;


    public ProductoFisico(String nombre, double precio, int cantidad, double peso) {
        super(nombre, precio);
        this.cantidad = (cantidad < 0) ? 1 : cantidad;
        this.peso = (peso < 0.0) ? 1.0 : peso;
    }//constructor

    public int getCantidad() {
        return cantidad;
    }// getCantidad

    public void setCantidad(int cantidad) {
        this.cantidad = (cantidad < 0) ? 1 : cantidad;
    }//setCantidad

    public double getPeso() {
        return peso;
    }//getPeso

    public void setPeso(double peso) {
        this.peso = (peso < 0.0) ? 1.0 : peso;
    }//setPeso
}//class ProductoFisico
