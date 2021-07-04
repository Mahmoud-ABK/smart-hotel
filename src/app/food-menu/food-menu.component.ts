import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);




@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  breakfast : { name: string, pic: string }[] = [
    {
      name: "croissant",
      pic: "croissant",

    },
    {
      name: "cake",
      pic: "cake",

    },
    {
      name: "cupcake",
      pic: "cupcake",
    },

    {
      name: "mille feuilles",
      pic: "mille feuilles",

    },
    {
      name: "pancake",
      pic: "pancake",

    },


  ]
 drinks: { name: string, pic: string }[] = [
    {
      name: "chocolate smoothie",
      pic: "chocosmoothie",

    },
    {
      name: "milk",
      pic: "milk",

    },
    {
      name: "coffee",
      pic: "coffee",
    },

    {
      name: "water",
      pic: "water",

    },
    {
      name: "kiwi coctail",
      pic: "kiwi coctail",

    },
  ]
  lunch: { name: string, pic: string }[] = [
    {
      name: "couscous",
      pic: "couscous",

    },
    {
      name: "salad",
      pic: "salad",

    },
    {
      name: "pizza",
      pic: "pizza",
    },

    {
      name: "rice",
      pic: "rice",

    },
    {
      name: "spaghetti",
      pic: "spaghetti",

    },


  ]
  dinner: { name: string, pic: string }[] = [
    {
      name: "mtabga",
      pic: "mtabga",

    },
    {
      name: "salmon",
      pic: "salmon",

    },
    {
      name: "soup",
      pic: "soup",
    },



  ]
  snacks: { name: string, pic: string }[] = [
    {
      name: "Raspberries",
      pic: "raspberries",

    },
    {
      name: "yogurt",
      pic: "yogurt",

    },
    {
      name: "ice cream",
      pic: "ice cream",
    },



  ]
  constructor() { }

  ngOnInit(): void {
  }
  



}
