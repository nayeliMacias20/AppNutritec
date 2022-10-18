import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moduleotros',
  templateUrl: './moduleotros.page.html',
  styleUrls: ['./moduleotros.page.scss'],
})
export class ModuleotrosPage implements OnInit {

    /*Revisar el nombre de la base de datos, aqui puse que su nombre 
  era alimentos, cuando realmente ese sera el nombre pero de la tabla*/
  alimentos: any[] = Array(20);

  /*Aqui el infinite scroll aun no funciona basicamente porque no tiene array, revisar eso con el team back*/

  constructor() { }

  ngOnInit() {
  }

}
