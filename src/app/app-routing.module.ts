import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { Step1Component } from './check-in/step1/step1.component';
import { Step2Component } from './check-in/step2/step2.component';
import { Step3Component } from './check-in/step3/step3.component'


const routes: Routes = [
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),IvyCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
