package org.generation.entidades;

public class ProductoDigital extends Producto{
    private String tipoArchivo;
    private double tamanioArchivo;

    public ProductoDigital(String nombre, double precio, String tipoArchivo,double tamanioArchivo) {
        super(nombre, precio);
        this.tipoArchivo = (tipoArchivo.isBlank()) ? "pdf" : tipoArchivo;
        this.tamanioArchivo = (tamanioArchivo < 0.0) ? 1.0 : tamanioArchivo;
    }//constructor
    public String getTipoArchivo() {
        return tipoArchivo;
    }//getTipoArchivo
    public void setTipoArchivo(String tipoArchivo) {
        this.tipoArchivo = (tipoArchivo.isBlank()) ? "pdf" : tipoArchivo;
    }//setTipoArchivo

    public double getTamanioArchivo() {
        return tamanioArchivo;
    }//getTamanioArchivo
    public void setTamanioArchivo(double tamanioArchivo) {
        this.tamanioArchivo = (tamanioArchivo < 0.0) ? 1.0 : tamanioArchivo;
    }//setTamanioArchivo

}//class ProductoDigital
