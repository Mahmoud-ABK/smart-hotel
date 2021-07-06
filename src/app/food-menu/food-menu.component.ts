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
  
  breakfast: {
    name: string, pic: string
    , checked: boolean, label: string
  }[] = [
      {
        name: "croissant",
        pic: "croissant",
        checked: false,
        label: "Add to list"

      },
      {
        name: "cake",
        pic: "cake",
        checked: false,
        label: "Add to list"

      },
      {
        name: "cupcake",
        pic: "cupcake",
        checked: false,
        label: "Add to list"
      },

      {
        name: "mille feuilles",
        pic: "mille feuilles",
        checked: false,
        label: "Add to list"

      },
      {
        name: "pancake",
        pic: "pancake",
        checked: false,
        label: "Add to list"


      },


    ]
  drinks: {
    name: string, pic: string
    , checked: boolean, label: string
  }[] = [
      {
        name: "chocolate smoothie",
        pic: "chocosmoothie",
        checked: false,
        label: "Add to list"

      },
      {
        name: "milk",
        pic: "milk",
        checked: false,
        label: "Add to list"

      },
      {
        name: "coffee",
        pic: "coffee",
        checked: false,
        label: "Add to list"
      },

      {
        name: "water",
        pic: "water",
        checked: false,
        label: "Add to list"

      },
      {
        name: "kiwi coctail",
        pic: "kiwi coctail",
        checked: false,
        label: "Add to list"

      },
    ]
  lunch: {
    name: string, pic: string
    , checked: boolean, label: string
  }[] = [
      {
        name: "couscous",
        pic: "couscous",
        checked: false,
        label: "Add to list"

      },
      {
        name: "salad",
        pic: "salad",
        checked: false,
        label: "Add to list"

      },
      {
        name: "pizza",
        pic: "pizza",
        checked: false,
        label: "Add to list"
      },

      {
        name: "rice",
        pic: "rice",
        checked: false,
        label: "Add to list"

      },
      {
        name: "spaghetti",
        pic: "spaghetti",
        checked: false,
        label: "Add to list"

      },


    ]
  dinner: {
    name: string, pic: string
    , checked: boolean, label: string
  }[] = [
      {
        name: "mtabga",
        pic: "mtabga",
        checked: false,
        label: "Add to list"

      },
      {
        name: "salmon",
        pic: "salmon",
        checked: false,
        label: "Add to list"

      },
      {
        name: "soup",
        pic: "soup",
        checked: false,
        label: "Add to list"
      },



    ]
  snacks: {
    name: string, pic: string
    , checked: boolean, label: string
  }[] = [
      {
        name: "Raspberries",
        pic: "raspberries",
        checked: false,
        label: "Add to list"

      },
      {
        name: "yogurt",
        pic: "yogurt",
        checked: false,
        label: "Add to list"

      },
      {
        name: "ice cream",
        pic: "ice cream",
        checked: false,
        label: "Add to list"
      },



    ]
  list: string[] = [

  ]
  constructor() { }

  ngOnInit(): void {
  }
  removerFromList(a:string) {
    this.list.forEach((name, index) => {
      if (name === a) this.list.splice(index, 1);
    });
  }
  onChecked(item) {
    item.checked = !item.checked
    console.log(item.checked)
    if (item.checked) {
      this.list.push(item.name)
      console.log(this.list);

      item.label = "Remove from list"
    }
    else {
      item.label = "Add to list"
      this.removerFromList(item.name)
      console.log(this.list)

    }

  }



}
