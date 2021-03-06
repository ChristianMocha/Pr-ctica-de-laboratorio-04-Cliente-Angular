import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Localidad } from '../models/Localidad';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api_url = 'http://40.84.223.180:8000/Practica_3_EJB_JSF_JPA-1.0/rest';

  constructor(private http: HttpClient) { }

  registro(usuario:Usuario) {
    console.log("Entrando al metodo", usuario)
    let headers = new HttpHeaders();
    headers= headers.set('content-type', 'application/json');
    return this.http.post(`${this.api_url}/usuario`, JSON.stringify(usuario), {headers});
  }

  login(correo:string, password:string) {
    const body = new HttpParams()
       .set('correo', correo)
       .set('password', password);
    return this.http.post(`${this.api_url}/usuario/login`, body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }


  

  getLocalidades() {
    return this.http.get(`${this.api_url}/localidad/0123023203`);
  }

  getLocalidad(id:number) {
    return this.http.get(`${this.api_url}/localidad/0123023203/${id}`);
  }

  postLocalidades(localidad:Localidad) {
    console.log("Entrando al metodo para editar.")
    let headers = new HttpHeaders();
    headers= headers.set('content-type', 'application/json');
    return this.http.post(`${this.api_url}/localidad/0123023203/`, JSON.stringify(localidad), {headers});
  }

  putLocalidades(localidad:Localidad, id:number) {
    console.log("Entrando al metodo para editar.")
    let headers = new HttpHeaders();
    headers= headers.set('content-type', 'application/json');
    return this.http.put(`${this.api_url}/localidad/editar/0123023203/${id}`, JSON.stringify(localidad), {headers});
  }

  deleteLocalidades(id:number) {
    return this.http.delete(`${this.api_url}/localidad/0123023203/${id}`,);
  }

}
