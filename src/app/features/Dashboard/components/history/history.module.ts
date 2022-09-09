import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import {HistoryRoutingModule} from "./history-routing.module";
import {HistoryComponent} from "./history.component";




@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HistoryModule { }
