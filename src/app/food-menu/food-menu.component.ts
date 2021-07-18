import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { FoodOrderModel } from '../Models/food-order-model';
import { InAppOperationsService } from '../Services/in-app-operations.service';
import { SignInUpService } from '../Services/sign-in-up.service';

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
  list: Array<{ foodName: string, quantity: number }> = [

  ]
  toRoom: boolean = false
  FoodOrder: FoodOrderModel = new FoodOrderModel()
  constructor(public loggingOut: SignInUpService, public router: Router, public inApp: InAppOperationsService) {

  }

  ngOnInit(): void {
    console.log( JSON.parse(localStorage.getItem('GuestData')));
    this.inApp.currentLoginInData= JSON.parse(localStorage.getItem('GuestData'))
    this.inApp.RoomID=+localStorage.getItem('Rid')

  }
  removerFromList(a: { foodName: string, quantity: number }) {
    this.list.forEach((el, index) => {
      if (el.foodName === a.foodName) this.list.splice(index, 1);
    });
    [this.breakfast, this.dinner, this.drinks, this.lunch, this.snacks].forEach(foodArray => {
      foodArray.forEach(foodItem => {
        if (foodItem.checked) {
          foodItem.checked = !foodItem.checked
          foodItem.label = "Add to list"
        }
      })
    })

  }
  onChecked(item: {
    name: string, pic: string
    , checked: boolean, label: string
  }) {
    item.checked = !item.checked

    if (item.checked) {
      this.list.push({ foodName: item.name, quantity: 1 })

      item.label = "Remove from list"
    }
    else {
      item.label = "Add to list"
      this.removerFromList({ foodName: item.name, quantity: 1 })

    }

  }
  ToInterface() {
    this.router.navigate(['/guestinterface'])
  }
  onLogout() {
    this.loggingOut.loggingOut()
  }
  onSend() {
    // console.log(this.list)
    // console.log("toRoom?");
    // console.log(this.toRoom);
    this.FoodOrder.name = this.inApp.currentLoginInData.FirstName + ' ' + this.inApp.currentLoginInData.LastName
    this.FoodOrder.email = this.inApp.currentLoginInData.Email
    this.FoodOrder.list = this.list
    this.FoodOrder.ToRoom = this.toRoom
    this.FoodOrder.num = this.inApp.currentLoginInData.PhoneNumber
    this.FoodOrder.roomid = this.inApp.RoomID
    console.log(this.FoodOrder);
    this.inApp.multiPusher('/FoodOrders',this.FoodOrder,"food order sent!")
  }
  scrolling(list){
    console.log(`scrolling to ${list}`);
    let el = document.getElementById(list);
    el.scrollIntoView();
  }



}
