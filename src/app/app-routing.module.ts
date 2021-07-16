import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CheckInComponent } from './check-in/check-in.component';
import { Step1Component } from './check-in/step1/step1.component';
import { Step2Component } from './check-in/step2/step2.component';
import { Step3Component } from './check-in/step3/step3.component';
import { AuthGuard } from './guards/auth.guard';
import { KitchenauthGuard } from './guards/kitchenauth.guard';

import { GuestInterfaceComponent } from './guest-interface/guest-interface.component';
import { HomeComponent } from './home/home.component';
import { KitchenPageLoginComponent } from './login-pages/kitchen-page-login/kitchen-page-login.component';
import { LoginGuestComponent } from './login-pages/login-guest/login-guest.component';
import { LoginManagerComponent } from './login-pages/login-manager/login-manager.component';
import { LoginRoundaboutComponent } from './login-pages/login-roundabout/login-roundabout.component';
import { LoginServantPageComponent } from './login-pages/login-servant-page/login-servant-page.component';
import { ManagerInterfaceComponent } from './manager-interface/manager-interface.component';
import { RoomManagementComponent } from './manager-interface/room-management/room-management.component';
import { RoomReportMenuComponent } from './manager-interface/room-report-menu/room-report-menu.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RoomControlComponent } from './room-settings/room-control/room-control.component';
import { RoomReportComponent } from './room-settings/room-report/room-report.component';
import { RoomSecurityComponent } from './room-settings/room-security/room-security.component';
import { RoomServicesComponent } from './room-settings/room-services/room-services.component';
import { RoomSettingsComponent } from './room-settings/room-settings.component';
import { KitchenPageComponent } from './staff-pages/kitchen-page/kitchen-page.component';
import { ServantPageComponent } from './staff-pages/servant-page/servant-page.component';


const routes: Routes = [
  {
  path:"",
  component:HomeComponent
  },
  {
    path:"guestlogin",
    component:LoginGuestComponent
  },
  { path:"checkin",
     component:CheckInComponent
  },
  {
    path:"loginroundabout",
     component:LoginRoundaboutComponent
  },
  { path:"managerlogin",
    component:LoginManagerComponent
  },
  { path:"kitchenlogin",
    component:KitchenPageLoginComponent
  },
  {
    path:"servantlogin",
    component:LoginServantPageComponent
  },
  {
    path:"passwordreset",
    component:PasswordResetComponent
   },
  {
    path:"guestinterface",
    component:GuestInterfaceComponent
  },
  {
    path:"servantpage",
    component:ServantPageComponent},
  {
    path:"kitchenpage",
    component:KitchenPageComponent,
    canActivate:[KitchenauthGuard]
  },
  {
    path:"managerinterface",
    component:ManagerInterfaceComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"roommanagement",
        component:RoomManagementComponent
      },
      {
        path:"roomreportmenu",
        component:RoomReportMenuComponent
      }
    ]
  
  },
  {
    path:"roomsettings",
    component:RoomSettingsComponent,
    children:[
      {
        path:"roomservices",
        component:RoomServicesComponent
      },
      {
        path:"roomreport",
        component:RoomReportComponent
      },
      {
        path:"roomsecurity",
        component:RoomSecurityComponent
      },
      {
        path:"roomcontrol",
        component:RoomControlComponent
      },
    ]
  },

  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),IvyCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
