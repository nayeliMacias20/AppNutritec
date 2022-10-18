import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    username: string
    correo: string
    constructor() { }
  }
  