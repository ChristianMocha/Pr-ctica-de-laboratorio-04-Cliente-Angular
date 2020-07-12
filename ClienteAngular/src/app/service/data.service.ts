import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { tap }  from 'rxjs/operators';//para imprimir en consola


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBodegas(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(tap(console.log))
  }
}
