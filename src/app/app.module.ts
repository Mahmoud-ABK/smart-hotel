import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';









import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { GuestInterfaceComponent } from './guest-interface/guest-interface.component';
import { RoomSettingsComponent } from './room-settings/room-settings.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { ManagerInterfaceComponent } from './manager-interface/manager-interface.component';
import { StaffPagesComponent } from './staff-pages/staff-pages.component';
import { Step1Component } from './check-in/step1/step1.component';
import { Step2Component } from './check-in/step2/step2.component';
import { Step3Component } from './check-in/step3/step3.component';
import { GuestRoomMenuComponent } from './guest-interface/guest-room-menu/guest-room-menu.component';
import { RoomSettingsHomeComponent } from './guest-interface/room-settings-home/room-settings-home.component';
import { RoomSecurityComponent } from './room-settings/room-security/room-security.component';
import { RoomControlComponent } from './room-settings/room-control/room-control.component';
import { RoomServicesComponent } from './room-settings/room-services/room-services.component';
import { RoomReportComponent } from './room-settings/room-report/room-report.component';
import { RoomManagementComponent } from './manager-interface/room-management/room-management.component';
import { RoomReportMenuComponent } from './manager-interface/room-report-menu/room-report-menu.component';
import { KitchenPageComponent } from './staff-pages/kitchen-page/kitchen-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';



import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckInComponent,
    GuestInterfaceComponent,
    RoomSettingsComponent,
    FoodMenuComponent,
    ManagerInterfaceComponent,
    StaffPagesComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    GuestRoomMenuComponent,
    RoomSettingsHomeComponent,
    RoomSecurityComponent,
    RoomControlComponent,
    RoomServicesComponent,
    RoomReportComponent,
    RoomManagementComponent,
    RoomReportMenuComponent,
    KitchenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
