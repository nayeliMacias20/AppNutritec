import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleotrosPageRoutingModule } from './moduleotros-routing.module';

import { ModuleotrosPage } from './moduleotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleotrosPageRoutingModule
  ],
  declarations: [ModuleotrosPage]
})
export class ModuleotrosPageModule {}
