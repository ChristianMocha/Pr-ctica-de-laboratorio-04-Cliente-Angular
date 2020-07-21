import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component'; */
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
    /* BodegasComponent,
    Pageabout404Component */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
