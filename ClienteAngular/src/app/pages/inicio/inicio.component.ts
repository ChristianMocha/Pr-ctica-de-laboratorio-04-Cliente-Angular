import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CarritoService } from '../../service/carrito.service';
import { FacturaDetalle } from '../../models/FacturaDetalle';
import { Producto } from '../../models/Producto';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  productos: any;
  producto: Producto;
  nombreProducto: String;
  filterProducto='';

  inventarios;

  coutCarrito:number;
  carritoEstado = false;
  facturasDetalles:[FacturaDetalle];
  facturaDetalle:FacturaDetalle = {
    cantidad:0,
    subtotal:0,
    producto:null,
  };

  constructor(private dataservice: DataService, private carritoService:CarritoService) { }

  ngOnInit(): void {
    /* this.mensajes=this.dataservice.getProductos(); */

    this.dataservice.getProductos().subscribe( pro => {
      console.log(pro);
      this.productos = pro;
    },
    err => console.log(err)
    );
    
    //this.facturasDetalles = this.carritoService.getDetallesStorage();
    //this.coutCarrito = this.facturasDetalles.length;  
  }

  getProducto(id:number){
    /* console.log("id......." , id) */
    this.dataservice.getProductosId(id).subscribe(
      res => {
        //console.log("Producto en add. ",dtpro)
        this.inventarios = res['inventarios'];
        console.log("Producto.. ",this.inventarios)
        /*this.producto = {
          codigo:res['codigo'],
          nombre:res['nombre'],
          imagen:res['imagen'],
          precio:res['precio'],
          unidadMedida:res['unidadMedida'],

        }*/
        //this.producto = dtpro;
      },
      err => console.error(err)
    )
  }

  addCart(id:number){
    this.getProducto(id);
    //console.log("Producto en add. ",this.producto)
    /*
    this.facturaDetalle.cantidad = 1;
    this.facturaDetalle.producto = this.producto;
    this.facturaDetalle.subtotal = this.facturaDetalle.producto.precio*this.facturaDetalle.cantidad;
    console.log("factura", this.facturaDetalle);*/
  }

  carritoFalse(){
    this.carritoEstado = false
  }

  

}
