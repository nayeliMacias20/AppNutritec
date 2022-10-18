import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moduledesayuno',
  templateUrl: './moduledesayuno.page.html',
  styleUrls: ['./moduledesayuno.page.scss'],
})
export class ModuledesayunoPage implements OnInit {

  /*Revisar el nombre de la base de datos, aqui puse que su nombre 
  era alimentos, cuando realmente ese sera el nombre pero de la tabla*/
  alimentos: any[] = Array(20);

  /*Aqui el infinite scroll aun no funciona basicamente porque no tiene array, revisar eso con el team back*/

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    /*setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);*/
  }


}
