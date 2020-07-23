import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';//para imprimir en consola
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  producto: Observable<any>;
  URL_PRO = 'http://40.84.223.180:8000/Practica_3_EJB_JSF_JPA-1.0/rest/productos';

  constructor(private http: HttpClient) { }

  getBodegas() {
    return this.http.get(`${this.URL_PRO}`)
      .pipe(tap(console.log));
  }

  getProductos() {
    return this.http.get(`${this.URL_PRO}`)
    /* .pipe(tap(console.log));  */
  }


  getProductosId(id: number) {
    console.log("ID=.......", id)
    return this.http.get(`${this.URL_PRO}/${id}`);
  }

}

 


