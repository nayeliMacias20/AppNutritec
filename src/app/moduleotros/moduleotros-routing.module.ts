import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleotrosPage } from './moduleotros.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleotrosPageRoutingModule {}
