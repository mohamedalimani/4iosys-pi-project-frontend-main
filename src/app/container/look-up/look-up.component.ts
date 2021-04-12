import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-look-up',
  templateUrl: './look-up.component.html',
  styleUrls: ['./look-up.component.scss']
})
export class LookUpComponent implements OnInit {
  cont_available:Observable<any> ;
  
  constructor(private containerService:ContainerService) {
    this.cont_available = this.containerService.get_containers() ;
    this.cont_available.subscribe((x)=>this.cont_available = x) ;
   }

  ngOnInit() {

  }
}
