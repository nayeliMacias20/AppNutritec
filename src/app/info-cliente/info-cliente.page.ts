import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceNayeliService } from '../services/firebase-service-nayeli.service';
import { } from '../login/login.page';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.page.html',
  styleUrls: ['./info-cliente.page.scss'],
})
export class InfoClientePage implements OnInit {

  constructor(public router:Router,
    public firebaseServiceNayeli:FirebaseServiceNayeliService) { }
  nombre: string
  apellido: string 
  telefono: number
  correo:string
  ngOnInit() {
  }
 
  create(){
    let usuario = {};
    usuario['telefono'] = this.telefono;
    usuario['nombre'] = this.nombre;
    usuario['apellido'] = this.apellido;
    usuario['correo'] = this.correo;
    
    this.firebaseServiceNayeli.createUsuario(usuario).then(res =>{
      this.telefono = undefined;
      this.nombre = undefined;
      this.apellido = undefined;
      this.correo = undefined;
      this.router.navigate(['/home']);
    }).catch(error =>{
      console.log(error)
    });
  }
}
