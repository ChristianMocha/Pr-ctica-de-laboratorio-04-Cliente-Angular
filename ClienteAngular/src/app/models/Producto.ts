export interface Producto {
    codigo:number;
    nombre: string;
    unidadMedida: string;
    imagen: string;
    precio: number;
    inventarios: {
        codigo:number;
        cantidad:number;
    }
}