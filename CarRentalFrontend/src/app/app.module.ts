import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular-4-data-table";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    CarDetailComponent,
    ProfileComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddCarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    DataTableModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'profile', component:ProfileComponent},
      {path:'car-detail', component:CarDetailComponent},
      {path:'car-add', component:AddCarComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'admin/dasbhoard', component:AdminDashboardComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
