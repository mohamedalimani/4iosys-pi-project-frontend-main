import {Component, OnInit} from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
//import { ContentAnimateDirective } from 'src/app/shared/directives/content-animate.directive';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  constructor(private containerService:ContainerService) { }
 
}
