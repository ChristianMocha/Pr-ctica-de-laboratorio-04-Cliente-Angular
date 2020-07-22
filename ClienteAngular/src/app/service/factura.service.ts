import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  api_url = 'http://40.84.223.180/Practica_3_EJB_JSF_JPA-1.0/rest';




  constructor(private http: HttpClient) { }


  getFacturas() {
    return this.http.get(`${this.api_url}/factura/0123023203`);
  }

  setFactura() {
    return this.http.get(`${this.api_url}/factura/0123023203`);
  }

  getDetalles(id: number) {
    return this.http.get(`${this.api_url}/factura/detalles/${id}`);
  }

  cancelarFactura(id: number) {
    return this.http.delete(`${this.api_url}/factura/${id}`);
  }


}
