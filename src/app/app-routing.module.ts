import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),IvyCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
