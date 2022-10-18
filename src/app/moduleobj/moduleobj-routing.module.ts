import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleobjPage } from './moduleobj.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleobjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleobjPageRoutingModule {}
