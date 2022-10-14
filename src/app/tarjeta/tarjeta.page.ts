import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseServiceNayeliService } from '../services/firebase-service-nayeli.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.page.html',
  styleUrls: ['./tarjeta.page.scss'],
})
export class TarjetaPage implements OnInit {

  constructor(public router:Router,
    public alertController: AlertController,
    public firebaseServiceNayeli:FirebaseServiceNayeliService ) { }
    num: number
    fecha: number
    cvv: number
    telefono: number

  ngOnInit() {
  }
  agregarTarjeta(){
      let usuario = {};
      usuario['numero'] = this.num;
      usuario['caducidad'] = this.fecha; 
      usuario['cvv'] = this.cvv;

      this.firebaseServiceNayeli.createUsuario(usuario).then(res =>{
        this.num = undefined;
        this.router.navigate(['/payment'])
      }).catch(error =>{
        console.log(error)
      });
  }
  async alertacvv(){
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CVV',
      message: 'El CVV es un número de 3 dígitos que está al reverso de tu tarjeta.',
      buttons: ['Entendido']
     });

      await alert.present();
  }
  async alerta(){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Fecha de vencimiento',
    message: 'La fecha de vencimiento se ubica en la parte frontal inferior de tu tarjeta.',
    buttons: ['Entendido']
   });

    await alert.present();
}
}
