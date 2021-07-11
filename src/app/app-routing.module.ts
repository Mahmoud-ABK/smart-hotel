import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CheckInComponent } from './check-in/check-in.component';
import { Step1Component } from './check-in/step1/step1.component';
import { Step2Component } from './check-in/step2/step2.component';
import { Step3Component } from './check-in/step3/step3.component';
import { HomeComponent } from './home/home.component';
import { KitchenPageLoginComponent } from './login-pages/kitchen-page-login/kitchen-page-login.component';
import { LoginGuestComponent } from './login-pages/login-guest/login-guest.component';
import { LoginManagerComponent } from './login-pages/login-manager/login-manager.component';
import { LoginRoundaboutComponent } from './login-pages/login-roundabout/login-roundabout.component';
import { LoginServantPageComponent } from './login-pages/login-servant-page/login-servant-page.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"guestlogin",component:LoginGuestComponent},
  {path:"checkin",component:CheckInComponent},
  {path:"loginroundabout", component:LoginRoundaboutComponent},
  {path:"managerlogin",component:LoginManagerComponent},
  {path:"kitchenlogin",component:KitchenPageLoginComponent},
  {path:"servantlogin",component:LoginServantPageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),IvyCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
