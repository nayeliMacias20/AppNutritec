import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FirebaseServiceNayeliService } from '../services/firebase-service-nayeli.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usuario: any
  telefono: number
  nombre: string
  apellido: string
  correo: any
  
  constructor(private menu: MenuController,
    public firebaseServiceNayeli:FirebaseServiceNayeliService,
    public router:Router) { }

  ngOnInit() {
    //Se cargan todos los usuarios 
    this.firebaseServiceNayeli.getUsuario().subscribe(data =>{
      this.usuario = data.map(e =>{
        return {
          isedit:false,
          nombre: e.payload.doc.data()['nombre'],
          apellido: e.payload.doc.data()['apellido'],
          telefono: e.payload.doc.data()['telefono'],
          correo: e.payload.doc.data()['correo']
        };
      })
      console.log(this.usuario);
    });
 }
 
 editar(usuario){
  usuario.isedist = true;
  usuario.editnombre = usuario.nombre;
  usuario.editapellido = usuario.apellido;
  usuario.editcorreo = usuario.correo;
 }
 guardar(usuardata){
  let usuariog = {};
  usuariog['nombre'] = usuardata.editnombre;
  usuariog['apellido'] = usuardata.editapellido;
  usuariog['correo'] = usuardata.editcorreo;
  this.firebaseServiceNayeli.updateUsuario(usuardata.id, usuariog);
  usuardata.isedit = false;
 }
 eliminar(usuarioId){
   this.firebaseServiceNayeli.deleteUsuario(usuarioId);
 }
}
