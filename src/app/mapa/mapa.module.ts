import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
    HttpClientModule,
  SocketIoModule.forRoot(config)
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
