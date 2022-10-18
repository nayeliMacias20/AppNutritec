import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegloginPageRoutingModule } from './reglogin-routing.module';

import { RegloginPage } from './reglogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegloginPageRoutingModule
  ],
  declarations: [RegloginPage]
})
export class RegloginPageModule {}
