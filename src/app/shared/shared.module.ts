import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "../features/shared/components/sidebar/sidebar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [SidebarComponent]
})
export class SharedModule { }
