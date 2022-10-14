import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import * as  mapboxgl from 'mapbox-gl';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { Socket } from 'ngx-socket-io';
import {MapCustomService} from '../services/map-custom.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  
  modeInput='start';
  wayPoints:WayPoints ={start: null,end: null};
  preferenceGender=null;
  hourTravel=null;

 

  constructor( private menu: MenuController,private firebaseServiceService:FirebaseServiceService,
    private mapCustomService: MapCustomService,private renderer2:Renderer2,private socket:Socket,) {}

 /* mapa: mapboxgl.Map;*/
  config: any;
  collection = { count: 0, data: [] }

  
  toggleMenu(){
    this.menu.toggle("first");
  }

  ngOnInit(){
    this.mapCustomService.buildMap()
      .then(({geocoder, map}) => {
        // this.asGeoCoder
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );


        console.log('*** TODO BIEN *****');
      })
      .catch((err) => {
        console.log('******* ERROR ******', err);
      });

      this.mapCustomService.cbAddress.subscribe((getPoint) => {
        if (this.modeInput === 'start') {
          this.wayPoints.start = getPoint;
        }
        if (this.modeInput === 'end') {
          this.wayPoints.end = getPoint;
        }
      });

      this.socket.fromEvent('position')
      .subscribe(({coords})=>{
        console.log('********DESDE SERVER******',coords)
        this.mapCustomService.addMarkerCustom(coords);
      })

    
    /*mapboxgl.accessToken = environment.mapboxKey;
     this.mapa = new mapboxgl.Map({
        container: 'map', // container id
         style: 'mapbox://styles/mapbox/streets-v11',
          center: [-74.5, 40], // starting position
          zoom: 9 // starting zoom
     });  */
     
     this.config ={
      itemsPerpages:5,
      currentPage:1,
      totalItems:this.collection.count
    };

     
    this.firebaseServiceService.getTravel().subscribe(resp=>{
       this.collection.data = resp.map((e:any)=>{
         return{
          id:e.payload.doc.data().id,
          carPlate:e.payload.doc.data().carPlate,
          driver:e.payload.doc.data().driver,
          startingPoint:e.payload.doc.data().startingPoint,
          departureTime:e.payload.doc.data().departureTime,
          finalPoint:e.payload.doc.data().finalPoint,
          checkIn:e.payload.doc.data().checkIn,
          pay:e.payload.doc.data().pay
         }
       })
     },error=>{
       console.error(error);
     });

     


    
  }
  drawRoute(): void {
    console.log('***** PUNTOS de ORIGEN y DESTINO', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];

    this.mapCustomService.loadCoords(coords);
  }


  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  testMarker(): void{
    this.mapCustomService.addMarkerCustom([-8.628139488926513, 41.159082702543635]);
  }

  createT(){
    let travelsP={}
    travelsP['preferenceGender']=this.preferenceGender;
    travelsP['hourTravel']=this.hourTravel;

    this.firebaseServiceService.createTravelP(travelsP).then(res =>{
      this.preferenceGender=undefined;
      this.hourTravel=undefined;
      this.wayPoints.start=undefined;
      this.wayPoints.end=undefined;

      
    }).catch(error=>{
      console.log(error)
    });

  }

  

}

export class WayPoints{
  start: any;
  end: any;
}

