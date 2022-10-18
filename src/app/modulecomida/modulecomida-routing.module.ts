import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulecomidaPage } from './modulecomida.page';

const routes: Routes = [
  {
    path: '',
    component: ModulecomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulecomidaPageRoutingModule {}
