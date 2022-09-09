import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import {MedicineRoutingModule} from "./medicine-routing.module";
import {MedicineComponent} from "./medicine.component";


@NgModule({
  declarations: [
    MedicineComponent
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MedicineModule { }
