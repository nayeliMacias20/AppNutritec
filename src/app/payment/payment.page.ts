import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { FirebaseServiceNayeliService } from '../services/firebase-service-nayeli.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    usuario: any
    num: number
    telefono: number
    mostrar:boolean
    valor:string
  constructor(public router:Router,
    public alertController:AlertController,
    private firebaseServiceNayeli:FirebaseServiceNayeliService) { }

    

  ngOnInit() {
     //Se cargan todos los usuarios 
     this.firebaseServiceNayeli.getUsuario().subscribe(data =>{
       this.usuario = data.map(e =>{
         return {
          telefono: e.payload.doc.data()['telefono'],
           num: e.payload.doc.data()['ntarjeta']
         };
       })
       console.log(this.usuario);
     });
  }
  agregarTarjeta(){
    this.router.navigate(['/tarjeta'])
  }
  async pagoEfectivoAlert(){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Pago en efectivo',
    message: 'Puedes realizar tus pagos con efectivo al instante!,Solo agrega la forma de pago desde tu viaje.',
    buttons: ['Entendido']
   });
    await alert.present();
  }
  async pagoTarjetaAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pago Tarjeta débito / Crédito',
      message: 'Puedes realizar tus pagos con cualquier Tarjeta de débito o Crédito participantes: Visa, Mastercard,etc.',
      buttons: ['Entendido']
     });
      await alert.present();
  }
  showInfo(value:boolean){
    this.mostrar=value;
    if(value==true){
      this.valor='info-cliente'
    }
  }
}
