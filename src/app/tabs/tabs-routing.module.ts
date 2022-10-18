import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../Login/Login.module').then(m =>m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../Home/Home.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../modulecena/modulecena.module').then(m => m.ModulecenaPageModule)
      },
      {
        path:'objetivos',
        loadChildren: () => import('../moduleobj/moduleobj.module').then(m => m.ModuleobjPageModule)
      },
      {
        path:'progreso',
        loadChildren: () => import('../moduleprog/moduleprog.module').then(m => m.ModuleprogPageModule)
      },
      {
        path:'objetivos',
        loadChildren: () => import('../modulecena/modulecena.module').then(m => m.ModulecenaPageModule)
      },
      {
        path:'registro',
        loadChildren: () => import('../reglogin/reglogin.module').then(m => m.RegloginPageModule)
      },
      {
        path:'configuracion',
        loadChildren: () => import('../config/config.module').then(m => m.ConfigPageModule)
      },
      {
        path:'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
