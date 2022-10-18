import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuledesayunoPageRoutingModule } from './moduledesayuno-routing.module';

import { ModuledesayunoPage } from './moduledesayuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuledesayunoPageRoutingModule
  ],
  declarations: [ModuledesayunoPage]
})
export class ModuledesayunoPageModule {}
