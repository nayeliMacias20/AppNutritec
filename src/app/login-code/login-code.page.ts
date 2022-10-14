import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-code',
  templateUrl: './login-code.page.html',
  styleUrls: ['./login-code.page.scss'],
})
export class LoginCodePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  Login(){
    this.router.navigate(['/login'])
  }
  Code(){
    this.router.navigate(['/home'])
  }
}
