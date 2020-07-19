import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodegasComponent } from './bodegas/bodegas.component';
import { Pageabout404Component } from './pageabout404/pageabout404.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';






@NgModule({
  declarations: [
    InicioComponent,
    BodegasComponent,
    Pageabout404Component,
    PruebaComponent,
    MicuentaComponent,
    FilterPipe
    
  ],
  exports: [
    InicioComponent,
    BodegasComponent,
    Pageabout404Component,
    PruebaComponent,
    MicuentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
