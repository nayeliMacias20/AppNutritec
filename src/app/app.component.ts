import { Component } from '@angular/core';
import { FirebaseServiceNayeliService } from './services/firebase-service-nayeli.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario:any
  constructor(public firebaseServiceNayeli:FirebaseServiceNayeliService) {}
  ngOnInit() {
    //Se cargan todos los usuarios 
    this.firebaseServiceNayeli.getUsuario().subscribe(data =>{
      this.usuario = data.map(e =>{
        return {
          nombre: e.payload.doc.data()['nombre'],
          apellido: e.payload.doc.data()['apellido'],
          telefono: e.payload.doc.data()['telefono'],
          correo: e.payload.doc.data()['correo']
        };
      })
      console.log(this.usuario);
    });
 }
}
