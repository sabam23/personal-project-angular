import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { ProgrammingRoutingModule } from './programming-routing.module';
import { ProgrammingComponent } from './programming.component';

@NgModule({
  declarations: [ProgrammingComponent],
  imports: [
    CommonModule,
    ProgrammingRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProgrammingModule {}
