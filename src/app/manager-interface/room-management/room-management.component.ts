import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {

  rooms:Array<object>=[
    {
      roomID:1,
      roomOwner:"khalid la9ab",
      availability:"available",
      gas:"safe",
      fire:"safe",
      door:"locked"
    },
    {
      roomID:2,
      roomOwner:"khalid",
      availability:"available",
      gas:"safe",
      fire:"safe",
      door:"unlocked"
    },
    {
      roomID:3,
      roomOwner:"khalid",
      availability:"available",
      gas:"safe",
      fire:"safe",
      door:"locked"
    },
    {
      roomID:4,
      roomOwner:"khalid",
      availability:"available",
      gas:"safe",
      fire:"safe",
      door:"locked"
    },
    {
      roomID:5,
      roomOwner:"khalid",
      availability:"available",
      gas:"safe",
      fire:"safe",
      door:"locked"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
