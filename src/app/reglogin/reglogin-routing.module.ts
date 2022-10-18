import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegloginPage } from './reglogin.page';

const routes: Routes = [
  {
    path: '',
    component: RegloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegloginPageRoutingModule {}
