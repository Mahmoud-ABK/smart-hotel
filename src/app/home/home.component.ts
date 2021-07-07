import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapsed:boolean=true;
  persons:Array<object>=[
    {
      name:"name1",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
      , pic:"../../assets/testimonial1.jpg"
    } ,
    {
      name:"name2",
      text: `aaSome quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
      , pic:"../../assets/testimonial2.jpg"
    },
    {
      name:"name3",
      text: `bbSome quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
      , pic:"../../assets/testimonial3.png"
    },
    {
      name:"name4",
      text: `ccSome quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
      , pic:"../../assets/testimonial4.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    
  }

}
