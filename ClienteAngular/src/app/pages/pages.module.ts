import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Pageabout404Component } from './pageabout404/pageabout404.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DireccionComponent } from './direccion/direccion.component';
import { InicioComponent } from './inicio/inicio.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    InicioComponent,
    Pageabout404Component,
    PruebaComponent,
    MicuentaComponent,
    PedidosComponent,
    LoginComponent,
    RegistroComponent,
    DireccionComponent,
    FilterPipe,
    CarritoComponent
    
  ],
  exports: [
    InicioComponent,
    Pageabout404Component,
    PruebaComponent,
    MicuentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
