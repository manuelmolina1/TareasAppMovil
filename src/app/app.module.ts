import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {MatSidenavModule} from '@angular/material/sidenav';
//import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
//import { DescripcionComponent } from './pages/descripcion/descripcion.component';
//import { ResidenciaComponent } from './pages/residencia/residencia.component';
//import { MetasComponent } from './pages/metas/metas.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componente/menu/menu.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    //DescripcionComponent,
    //ResidenciaComponent,
   // MetasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    //MatSidenavModule,
    //MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
