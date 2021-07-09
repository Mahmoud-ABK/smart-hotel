import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-page',
  templateUrl: './kitchen-page.component.html',
  styleUrls: ['./kitchen-page.component.css']
})
export class KitchenPageComponent implements OnInit {

  orders:Array<object>=[
    {
      roomID:1,
      roomOwner:"khalid",
    },
    {
      roomID:2,
      roomOwner:"bou khalid",
    },
    {
      roomID:3,
      roomOwner:"aamet khalid",
    },
  ]

  foodList:Array<object>=[
    {
      dishName: [
        'coscous',
        'lasagne',
      ],
      quantity: [
        2,
        3,
        ],
    },
    {
      dishName: [
        'meal-1',
        'meal-2',
        'meal-3',
      ],
      quantity: [
        2,
        3,
        1
        ],
    },
    {
      dishName: [
        'ma9rouna',
        'kaskrout',
        'coscous',
        'lasagne',
      ],
      quantity: [
        1,
        3,
        5,
        6
        ],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
