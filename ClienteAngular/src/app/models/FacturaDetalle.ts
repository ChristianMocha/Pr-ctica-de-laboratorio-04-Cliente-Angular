import { Producto } from './Producto';
export interface FacturaDetalle {
    subtotal: number;
    cantidad: number;
    producto: any;
}