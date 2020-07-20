import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.lenght <2) return value;
    const  resultadoProducto = [];
    for(const producto of value){
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > - 1) {
        console.log('datos');
        resultadoProducto.push(producto);
      };
    };
    return resultadoProducto;
  }


  /* transform(value: unknown, ...arg: unknown[]): unknown {
    return null;
  } */


}
