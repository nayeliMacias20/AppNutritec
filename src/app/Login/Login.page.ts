import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UserService } from '../interfaces/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss']
})

export class Tab1Page {
  email:string;
  password:string;
  //Formulario reactivo
  log:FormGroup;

  constructor(public alertController:AlertController,public userService:UserService,private fb:FormBuilder) {
    this.email = ""
    this.password="";

    this.log = this.fb.group({
      email:(['',Validators.compose([Validators.required,Validators.email])]),
      password:(['',Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(16)])])
    });
}
async login(){
  if(this.email == "user@gmail.com" && this.password == "12345678")
  {
    let infouser = {
      email:'user@gmail.com',
      password:'12345678'
    }
    localStorage.setItem('infouser', JSON.stringify(infouser))
    this.userService.correo = infouser.email;
    // this.router.navigate(['/tabs/tab3']);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:'Exito!!',
      message: "LAS CREDENCIALES SON CORRECTAS",
      buttons:['OK']
    });
    await alert.present();
  }
  else{
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:'ERROR',
      message: "LAS CREDENCIALES SON INCORRECTAS",
      buttons:['OK']
    });
    await alert.present();
  }
  console.log(this.log.value);
}
}
