import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-code',
    loadChildren: () => import('./login-code/login-code.module').then( m => m.LoginCodePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'travels',
    loadChildren: () => import('./travels/travels.module').then( m => m.TravelsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },  {
    path: 'tarjeta',
    loadChildren: () => import('./tarjeta/tarjeta.module').then( m => m.TarjetaPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then( m => m.PaypalPageModule)
  },
  {
    path: 'info-cliente',
    loadChildren: () => import('./info-cliente/info-cliente.module').then( m => m.InfoClientePageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./soporte/soporte.module').then( m => m.SoportePageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
