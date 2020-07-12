import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  mensajes: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.mensajes=this.dataservice.getBodegas();
/*     .subscribe((bodegas: any[]) =>{
      console.log(bodegas)
      this.mensajes=bodegas
    }) */
  }

}
