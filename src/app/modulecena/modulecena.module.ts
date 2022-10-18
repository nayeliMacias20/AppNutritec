import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulecenaPageRoutingModule } from './modulecena-routing.module';

import { ModulecenaPage } from './modulecena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulecenaPageRoutingModule
  ],
  declarations: [ModulecenaPage]
})
export class ModulecenaPageModule {}
