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

  ]

  constructor() { }

  ngOnInit(): void {
  }
  OppaToArray(array:[]):[]{
    return array
  }
}
