import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodegasComponent } from './bodegas/bodegas.component';
import { Pageabout404Component } from './pageabout404/pageabout404.component';
import { PruebaComponent } from './prueba/prueba.component';





@NgModule({
  declarations: [
    BodegasComponent,
    Pageabout404Component,
    PruebaComponent
  ],
  exports: [
    BodegasComponent,
    Pageabout404Component,
    PruebaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
