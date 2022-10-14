import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore:AngularFirestore
  ) { }

  getTravel(){
    return this.firestore.collection("travels").snapshotChanges();
  }

  /**
   * crea un estudiante en firebase
   * @param travelsP estudiante a crear
   */
  createTravelP(travelsP:any){
    return this.firestore.collection("travelsP").add(travelsP);
  }

  /**
   * actualiza un estudiante existente en firebase
   * @param id id de la coleccion en firebase
   * @param estudiante estudiante a actualizar
   */
  updateEstudiante(id:any, estudiante:any){
    return this.firestore.collection("travels").doc(id).update(estudiante);
  }


  /**
   * borrar un estudiante existente en firebase
   * @param id id de la coleccion en firebase
   */
  deleteEstudiante(id:any){
    return this.firestore.collection("estudiantes").doc(id).delete();

  }

}
