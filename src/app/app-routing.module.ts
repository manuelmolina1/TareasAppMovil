import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { ResidenciaComponent } from './pages/residencia/residencia.component';
import { MetasComponent } from './pages/metas/metas.component';


const routes:Routes=[

  { 
   path:'descripcion',
   component: DescripcionComponent
   

   },
   { 
    path:'residencia',
    component:ResidenciaComponent,
   
   },

   { 
    path:'metas',
    component: MetasComponent,
    
    
   },

   { 
    path:'**',
    redirectTo:'descripcion'
    
  }

]



@NgModule({
  declarations: [],
  exports:[
RouterModule

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
