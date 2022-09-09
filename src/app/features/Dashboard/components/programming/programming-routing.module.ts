import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../../../../core/guards/login.guard';
import { ProgrammingComponent } from './programming.component';

const routes: Routes = [
  {
    path: '',
    component: ProgrammingComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingRoutingModule {}
