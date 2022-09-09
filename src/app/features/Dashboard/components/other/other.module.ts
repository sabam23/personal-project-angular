import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import {OtherRoutingModule} from "./other-routing.module";
import {OtherComponent} from "./other.component";




@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OtherModule { }
