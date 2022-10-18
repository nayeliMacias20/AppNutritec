import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulecenaPage } from './modulecena.page';

const routes: Routes = [
  {
    path: '',
    component: ModulecenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulecenaPageRoutingModule {}
