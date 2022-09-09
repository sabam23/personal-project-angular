import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/Components/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/login/components/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginGuard} from "./core/guards/login.guard";
import {LogPageGuard} from "./core/guards/log-page.guard";
import {CommonModule} from "@angular/common";
import { NotfoundComponent } from './features/notfoundPage/components/notfound.component';
import { UserpageComponent } from './features/UserPage/components/userpage.component';
import {PostDetailComponent} from "./features/postDetail/components/post-detail.component";
import {DashboardModule} from "./features/Dashboard/components/newsFeed/dashboard.module";
import {SidebarComponent} from "./features/shared/components/sidebar/sidebar.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  providers: [LoginGuard, LogPageGuard],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
