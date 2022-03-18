import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenciaPageRoutingModule } from './residencia-routing.module';

import { ResidenciaPage } from './residencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResidenciaPage]
})
export class ResidenciaPageModule {}
