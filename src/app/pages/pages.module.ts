import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ResidenciaComponent } from './residencia/residencia.component';
import { MetasComponent } from './metas/metas.component';



@NgModule({
  declarations: [
   DescripcionComponent,
   ResidenciaComponent,
   MetasComponent

  ],
   
  exports:[
    DescripcionComponent,
    ResidenciaComponent,
    MetasComponent

  ],
  

  imports: [
    CommonModule
  ]
})
export class PagesModule { }
