import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
