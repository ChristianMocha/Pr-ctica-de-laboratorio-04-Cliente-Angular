import { Injectable } from '@angular/core';
import { FacturaDetalle } from '../models/FacturaDetalle';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  facturasDetalles:[FacturaDetalle]

    getDetallesStorage() {
        return this.facturasDetalles;
    }

    setDetalle(facturaDetalle:FacturaDetalle){
        this.facturasDetalles.push(facturaDetalle);
    }
}
