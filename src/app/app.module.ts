import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {BrowserModule} from '@angular/platform-browser'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { StafflistComponent } from './pages/stafflist/stafflist.component';
import { ArtisanlistComponent } from './pages/artisanlist/artisanlist.component';
import { NavComponent } from './nav/nav.component';
import { RequestComponent } from './pages/request/request.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import { StatusComponent } from './pages/status/status.component';
import { StaffDashboardComponent } from './pages/staff-dashboard/staff-dashboard.component';
import { StaffrequestComponent } from './pages/staffrequest/staffrequest.component';
import { ArtfeedbackComponent } from './pages/artfeedback/artfeedback.component';




//import search
@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    StafflistComponent,
    ArtisanlistComponent,
    NavComponent,
    RequestComponent,
    TechnicianComponent,
    StatusComponent,
    StaffDashboardComponent,
    StaffrequestComponent,
    ArtfeedbackComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngModel binding
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
