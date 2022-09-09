import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports-routing.module';

@NgModule({
  declarations: [SportsComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SportsModule {}
