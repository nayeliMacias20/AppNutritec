import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleprogPageRoutingModule } from './moduleprog-routing.module';

import { ModuleprogPage } from './moduleprog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleprogPageRoutingModule
  ],
  declarations: [ModuleprogPage]
})
export class ModuleprogPageModule {}
