import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reglogin',
  templateUrl: './reglogin.page.html',
  styleUrls: ['./reglogin.page.scss'],
})
export class RegloginPage implements OnInit {
  email:string;
  username:string;
  password:string;
  //Formulario
  registro:FormGroup;

  constructor(private fb:FormBuilder) {
    this.email="";
    this.password="";
    this.username="";

    this.registro = this.fb.group({
      username:(['',Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(16)])]),
      email:(['',Validators.compose([Validators.required,Validators.email])]),
      password:(['',Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(16)])]),
    });
   }

  ngOnInit() {
  }

}
