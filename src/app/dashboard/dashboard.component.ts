import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FixedScaleAxis } from 'chartist';
import { ContainerService } from '../services/container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  public headers = new HttpHeaders().set('access-control-allow-origin','http://localhost:3000');
  public cont_available:Observable<any> ;
  public sensors_mesures:Observable<any> ;

ngOnInit(){}

 constructor(private containerService:ContainerService) {
  this.cont_available = this.containerService.get_containers() ;
  this.cont_available.subscribe((x)=>this.cont_available = x) ;
  
  this.sensors_mesures = this.containerService.get_sensors_mesures() ;
  this.sensors_mesures.subscribe((x)=>this.sensors_mesures = x) ;
}


  style = {
    sources: {
      world: {
        type: "geojson",
        data: "assets/world.geo.json"
      }
    },
    version: 8,
    layers: [
      {
        "id": "countries-fill",
        "type": "fill",
        "source": "world",
        "layout": {},
        "paint": {
          'fill-color': '#000000',
        },
      },
      {
        "id": "countries-border",
        "type": "line",
        "source": "world",
        "layout": {},
        "paint": {
          'line-color': '#ffffff',
        },
      }
    ]
  }

}
