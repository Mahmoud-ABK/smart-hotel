import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { RoomSettingsComponent } from './room-settings/room-settings.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { ManagerInterfaceComponent } from './manager-interface/manager-interface.component';
import { StaffPagesComponent } from './staff-pages/staff-pages.component';
import { Step1Component } from './check-in/step1/step1.component';
import { Step2Component } from './check-in/step2/step2.component';
import { Step3Component } from './check-in/step3/step3.component';
import { RoomSecurityComponent } from './room-settings/room-security/room-security.component';
import { RoomControlComponent } from './room-settings/room-control/room-control.component';
import { RoomServicesComponent } from './room-settings/room-services/room-services.component';
import { RoomReportComponent } from './room-settings/room-report/room-report.component';
import { RoomManagementComponent } from './manager-interface/room-management/room-management.component';
import { RoomReportMenuComponent } from './manager-interface/room-report-menu/room-report-menu.component';
import { KitchenPageComponent } from './staff-pages/kitchen-page/kitchen-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPagesComponent } from './login-pages/login-pages.component';
import { LoginGuestComponent } from './login-pages/login-guest/login-guest.component';
import { LoginManagerComponent } from './login-pages/login-manager/login-manager.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KitchenPageLoginComponent } from './login-pages/kitchen-page-login/kitchen-page-login.component';
import { LoginRoundaboutComponent } from './login-pages/login-roundabout/login-roundabout.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatStepperModule } from '@angular/material/stepper';
import { SwiperModule } from 'swiper/angular';
import { ServantPageComponent } from './staff-pages/servant-page/servant-page.component';
import { LoginServantPageComponent } from './login-pages/login-servant-page/login-servant-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { SignInUpService } from './Services/sign-in-up.service';
import { DataImporterService } from './Services/data-importer.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KitchenService } from './Services/kitchen.service';
import { AuthGuard } from './guards/auth.guard';
import { CheckingOutComponent } from './checking-out/checking-out.component';
import { NotifierModule } from 'angular-notifier';
import {MatBadgeModule} from '@angular/material/badge';
import { RoomInfoComponent } from './manager-interface/room-management/room-info/room-info.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import {NgPipesModule} from 'ngx-pipes';
import { ArchiveComponent } from './archive/archive.component';
import { CleaningdataComponent } from './archive/cleaningdata/cleaningdata.component';
import { FoodOrdersDataComponent } from './archive/food-orders-data/food-orders-data.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ImageuploadcompoComponent } from './check-in/imageuploadcompo/imageuploadcompo.component';
import { DDirective } from './directives/d.directive';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';














@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    CheckInComponent,
    GuestProfileComponent,
    RoomSettingsComponent,
    FoodMenuComponent,
    ManagerInterfaceComponent,
    StaffPagesComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    RoomSecurityComponent,
    RoomControlComponent,
    RoomServicesComponent,
    RoomReportComponent,
    RoomManagementComponent,
    RoomReportMenuComponent,
    KitchenPageComponent,
    LoginPagesComponent,
    LoginGuestComponent,
    LoginManagerComponent,
    KitchenPageLoginComponent,
    LoginRoundaboutComponent,
    ServantPageComponent,
    LoginServantPageComponent,
    PasswordResetComponent,
    CheckingOutComponent,
    RoomInfoComponent,
    ArchiveComponent,
    CleaningdataComponent,
    FoodOrdersDataComponent,
    ImageuploadcompoComponent,
    DDirective,


  ],
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    MatSlideToggleModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgPipesModule,
    MatListModule,
    NotifierModule.withConfig({
      behaviour: {

        /**
         * Defines whether each notification will hide itself automatically after a timeout passes
         * @type {number | false}
         */
        autoHide: false,

        /**
         * Defines what happens when someone clicks on a notification
         * @type {'hide' | false}
         */
        onClick: false,

        /**
         * Defines whether the dismiss button is visible or not
         * @type {boolean}
         */
        showDismissButton: true,


        stacking: 100

      }
    })

  ],
  providers: [SignInUpService, DataImporterService,KitchenService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
