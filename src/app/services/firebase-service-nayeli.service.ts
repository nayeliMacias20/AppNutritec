import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceNayeliService {

  usuario:any
  constructor(
    private firestore:AngularFirestore
  ) { }

  //METODOS SERVICE
  /**
     * Metodo para listar todos los usuarios
     */
    getUsuario(){
      return this.firestore.collection('users').snapshotChanges();
    }
    
  /**
   * crea un usuario en firebase
   * @param usuario usuario a crear
   */
  createUsuario(usuario:any){
    alert("Bienvenid@")
    return this.firestore.collection('users').add(usuario);
  }
  /**
   * edita un usuario en firebase
   * @param usuarid usuario a editar
   * @param usuariog
   */
  updateUsuario(usuarid, usuariog){
    this.firestore.doc('users/' + usuarid).update(usuariog);
    alert("Contacto guardado");
  }
  /**
   * elimina un usuario en firebase
   * @param usuarioId usuario a eliminar
   */
  deleteUsuario(usuarioId){
    this.firestore.doc('users/' + usuarioId).delete();
  }
}