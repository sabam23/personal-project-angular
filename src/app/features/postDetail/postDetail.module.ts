import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PostDetailComponent} from "./components/post-detail.component";
import {PostDetailRoutingModule} from "./postDetail-routing.module";



@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PostDetailRoutingModule
  ]
})
export class PostDetailModule { }
