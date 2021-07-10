import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-page',
  templateUrl: './kitchen-page.component.html',
  styleUrls: ['./kitchen-page.component.css']
})
export class KitchenPageComponent implements OnInit {
  foodOrders: Array<object> = [
    {
      Roomid: 1,
      guestName: "khalid ",
      food: [
        {
          foodname: "Rasperries",
          quantity: 3
        },
        {
          foodname: "croissant",
          quantity: 2
        }
      ]
    },
    {
      Roomid: 2,
      guestName: "3am khalid ",
      food: [
        {
          foodname: "mtabga",
          quantity: 2
        },
        {
          foodname: "kosksi",
          quantity: 1
        },
        {
          foodname: "water",
          quantity: 6
        }

      ]
    },
    {
      Roomid: 3,
      guestName: "5alat khalid ",
      food: [
        {
          foodname: "rouz",
          quantity: 2
        },
        {
          foodname: "m7amsa",
          quantity: 1
        },
        {
          foodname: "Ma9arouna jerya",
          quantity: 7
        },
        {
          foodname: "3ejja belmergez",
          quantity: 10
        }

      ]
    },
    {
      Roomid: 4,
      guestName: "5alet khalid ",
      food: [
        {
          foodname: "roouz",
          quantity: 0
        },
        {
          foodname: "m7amssa",
          quantity: 9
        },
        {
          foodname: "Maa9arouna jeerya",
          quantity: 9
        },
        {
          foodname: "3eejja belmergez",
          quantity: 15
        }

      ]
    },
    {
      Roomid: 5,
      guestName: "om khalid ",
      food: [
        {
          foodname: "rouz kk",
          quantity: 3
        },
        {
          foodname: "m7ammsa",
          quantity: 2
        },
        {
          foodname: "Maa9arouna jerya",
          quantity: 6
        },
        {
          foodname: "3ejjaa belmergez",
          quantity: 100
        }

      ]
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  OppaToArray(array:[]):[]{
    return array
  }

  removerFromList(a:object) {
    this.foodOrders.forEach((foodOrder, index) => {
    if(foodOrder === a) this.foodOrders.splice(index, 1);
    });
  }

}
