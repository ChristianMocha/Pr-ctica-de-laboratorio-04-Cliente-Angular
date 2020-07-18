import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component'; */
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VerticalnavComponent } from './components/verticalnav/verticalnav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VerticalnavComponent,
    /* BodegasComponent,
    Pageabout404Component */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
