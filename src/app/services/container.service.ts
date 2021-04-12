import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// container model for submission

@Injectable({
  providedIn: 'root'
})

export class ContainerService {

  constructor(private http:HttpClient) {}

  public get_containers():Observable<any>{
    return this.http.get('http://localhost:3000/containers');
  } 

  public get_sensors_mesures():Observable<any>{
    return this.http.get('http://localhost:3000/sensors_mesures') ;
  }

}
