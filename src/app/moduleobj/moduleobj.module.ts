import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleobjPageRoutingModule } from './moduleobj-routing.module';

import { ModuleobjPage } from './moduleobj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleobjPageRoutingModule
  ],
  declarations: [ModuleobjPage]
})
export class ModuleobjPageModule {}
