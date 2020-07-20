import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  facturas: any;
  detalles: any;
  facturaID: number;
  

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturas = this.facturaService.getFacturas();
    //console.log("facturas"+this.facturas)
  }

  getDetalles(id:number){
    //console.log("id de factura: "+id)
    this.detalles = this.facturaService.getDetalles(id);
  }

  cancelarFactura(){
    console.log("factura id: "+this.facturaID)
    this.facturaService.cancelarFactura(this.facturaID).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.facturas = this.facturaService.getFacturas();
  }

  setFacCode(id:number){
    this.facturaID = id;
  }

}
