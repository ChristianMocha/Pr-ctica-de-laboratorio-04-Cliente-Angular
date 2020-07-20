import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  productos: any;
  detallePro: any;
  nombreProducto: String;
  filterProducto=''


  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    /* this.mensajes=this.dataservice.getProductos(); */

    this.dataservice.getProductos().subscribe( pro => {
      console.log(pro);
      this.productos = pro;
    },
    err => console.log(err)
    );
    
    
  }

  getDetallesProducto(id:number){

    /* console.log("id......." , id) */
    this.detallePro = this.dataservice.getProductosId(id).subscribe(
      dtpro => {
        console.log(dtpro)
        this.detallePro = dtpro;
      },
      err => console.error(err)
    )
  }

  addCart(newNombre: HTMLSpanElement, newCategoria: HTMLSpanElement, newPrecio: HTMLSpanElement){
    console.log("adding....", newNombre.textContent, newCategoria.textContent, newPrecio.textContent )
    return false
  }

  

  

}
