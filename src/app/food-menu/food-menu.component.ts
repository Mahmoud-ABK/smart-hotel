import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Food } from '../Models/food';
import { FoodOrderModel } from '../Models/food-order-model';
import { GuestDataModel } from '../Models/guest-data-model';
import { DataImporterService } from '../Services/data-importer.service';
import { InAppOperationsService } from '../Services/in-app-operations.service';
import { SignInUpService } from '../Services/sign-in-up.service';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


interface listOfFood {
  breakfast: Array<Food>,
  dinner: Array<Food>,
  lunch: Array<Food>,
  drinks: Array<Food>,
  snacks: Array<Food>,
}

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  breakfast: Array<Food>
  drinks: Array<Food>
  lunch: Array<Food>
  dinner: Array<Food>
  snacks: Array<Food>
  list: Array<{ foodName: string, quantity: number }> = [
  ]
  toRoom: boolean = false
  FoodOrder: FoodOrderModel = new FoodOrderModel()
  constructor(public loggingOut: SignInUpService, public router: Router, public inApp: InAppOperationsService, public dataImporter: DataImporterService) {
    // this.dataImporter.FoodListImporter(this.breakfast, this.dinner, this.drinks, this.lunch, this.snacks)
  }
  Data: GuestDataModel

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('GuestData')));
    this.inApp.currentLoginInData = JSON.parse(localStorage.getItem('GuestData'))
    this.inApp.RoomID = +localStorage.getItem('Rid')
    this.loggingOut.finishedSession(this.inApp.currentLoginInData.checkin, this.inApp.currentLoginInData.checkout)
    this.Data = this.inApp.currentLoginInData
    console.log(this.breakfast);
    this.dataImporter.FoodListImporter().subscribe((a: listOfFood) => {
      this.breakfast = a.breakfast
      this.dinner = a.dinner
      this.drinks = a.drinks
      this.lunch = a.lunch
      this.snacks = a.snacks
    })



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
  onChecked(item: Food) {
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
    this.inApp.multiPusher('/FoodOrders', this.FoodOrder, "food order sent!")
    this.inApp.ToArchive('/FoodOrders',this.inApp.RoomID,this.FoodOrder)
  }
  scrolling(list) {
    console.log(`scrolling to ${list}`);
    let el = document.getElementById(list);
    el.scrollIntoView();
  }



}
