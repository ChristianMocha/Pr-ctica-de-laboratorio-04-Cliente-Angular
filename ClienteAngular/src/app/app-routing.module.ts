import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component';
import { PruebaComponent } from './pages/prueba/prueba.component';


const routes: Routes = [
  {
    path: 'bodegas',
    component: BodegasComponent
  },
  {
    path: '**',
    component: Pageabout404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
