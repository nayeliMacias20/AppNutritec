import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleprogPage } from './moduleprog.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleprogPageRoutingModule {}
