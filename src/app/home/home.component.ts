import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { google } from 'ngx-bootstrap-icons';
import { $ } from 'protractor';
import { SwiperComponent } from "swiper/angular";
import  AOS from "aos";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { InAppOperationsService } from '../Services/in-app-operations.service';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapsed: boolean = true;
  x = window.innerHeight


  persons: Array<object> = [
    {
      name: "Jamel",
      text: `Everything was fantastic from service to quality of room to the personal touches.`
      , pic: "../../assets/testimonial1.jpg"
    },
    {
      name: "Manel",
      text: `Thank you for a truly amazing stay! Your hospitality is quite outstanding. The advanced technology made my stay even enjoyable! `
      , pic: "../../assets/testimonial2.jpg"
    },
    {
      name: "Wassim",
      text: `Beyond 5 stars! Stayed last week at this wonderful hotel. Everything exceeds one's wildest dream of a hotel. `
      , pic: "../../assets/testimonial3.png"
    },
    {
      name: "Karima",
      text: `This is indeed a place I do not want to leave, and when I do it is with one hope – to come back.  `
      , pic: "../../assets/testimonial4.png"
    }
  ]
  constructor(public InApp: InAppOperationsService) { }

  ngOnInit(): void {

    console.log(this.x);
    AOS.init()


  }

  onSubmit(form: NgForm) {
    console.log(form.value.peopleNum);
    console.log(form.value.checkindate);
    console.log(form.value.checkoutdate);
  }

}
