import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/Components/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/login/components/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './features/Dashboard/components/Dashboard-Mainpage/dashboard.component';
import {LoginGuard} from "./core/guards/login.guard";
import {LogPageGuard} from "./core/guards/log-page.guard";
import { CoursesComponent } from './features/Dashboard/components/courses/courses.component';
import { SidebarComponent } from './features/Dashboard/components/sidebar/sidebar.component';
import {CommonModule} from "@angular/common";
import { NotfoundComponent } from './features/notfoundPage/components/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    SidebarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [LoginGuard,LogPageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
