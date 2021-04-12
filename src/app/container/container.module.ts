import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RegisterComponent } from './register/register.component';
import { LookUpComponent } from './look-up/look-up.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'lookup', component: LookUpComponent}
];


@NgModule({
  declarations: [RegisterComponent, LookUpComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ContainerModule { }
