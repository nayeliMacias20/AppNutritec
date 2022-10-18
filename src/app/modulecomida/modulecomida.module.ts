import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulecomidaPageRoutingModule } from './modulecomida-routing.module';

import { ModulecomidaPage } from './modulecomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulecomidaPageRoutingModule
  ],
  declarations: [ModulecomidaPage]
})
export class ModulecomidaPageModule {}
