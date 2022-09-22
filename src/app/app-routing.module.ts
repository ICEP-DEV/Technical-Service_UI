import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ArtisanlistComponent } from './pages/artisanlist/artisanlist.component';
import { StafflistComponent } from './pages/stafflist/stafflist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'stafflist',component: StafflistComponent},
  {path: 'artisanlist', component: ArtisanlistComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
