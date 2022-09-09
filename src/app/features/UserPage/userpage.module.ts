import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {UserpageComponent} from "./components/userpage.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    UserpageComponent
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserPageModule { }
