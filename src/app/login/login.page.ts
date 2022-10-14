import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FirebaseServiceNayeliService } from '../services/firebase-service-nayeli.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Variables
    telefono: number 
    mostrar:boolean = false;
    
    //
  constructor(public router:Router,
    private firebaseServiceNayeli:FirebaseServiceNayeliService,
    private firestore: AngularFirestore) {
      
    }
  ngOnInit() {
  }
  siguiente(){
    this.router.navigate(['/info-cliente']);
  }
  
}
