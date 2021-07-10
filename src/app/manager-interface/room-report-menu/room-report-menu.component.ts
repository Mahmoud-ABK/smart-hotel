import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-report-menu',
  templateUrl: './room-report-menu.component.html',
  styleUrls: ['./room-report-menu.component.css']
})
export class RoomReportMenuComponent implements OnInit {

  reports:Array<object>=[
    {
      roomID: 1,
      roomOwner: "khaled",
      timeSent: "12:34 pm",
      PhoneNumber: "12 345 678",
      Title: "something as a report title",
      Details: "Maecenas sodales eros sed odio vehicula, at fringilla ligula tempor. Vestibulum tincidunt aliquam leo, ut pharetra purus facilisis a. Fusce sollicitudin nisi in gravida molestie. Aliquam sed blandit mauris, fermentum fermentum elit. Aenean non sem in erat faucibus porttitor eu sed libero. Morbi lobortis turpis eu lacus rutrum a volutpat nisi porta.",
      Pic: "./assets/hotel-problem.png"
    },
    {
      roomID: 2,
      roomOwner: "om khaled",
      timeSent: "10:34 pm",
      PhoneNumber: "12 345 678",
      Title: "something as a report title",
      Details: "Maecenas sodales eros sed odio vehicula, at fringilla ligula tempor. Vestibulum tincidunt aliquam leo, ut pharetra purus facilisis a. Fusce sollicitudin nisi in gravida molestie. Aliquam sed blandit mauris, fermentum fermentum elit. Aenean non sem in erat faucibus porttitor eu sed libero. Morbi lobortis turpis eu lacus rutrum a volutpat nisi porta.",
      Pic: "./assets/hotel-problem.png"
    },
    {
      roomID: 9,
      roomOwner: "khou khaled",
      timeSent: "11:34 pm",
      PhoneNumber: "12 345 678",
      Title: "something as a report title",
      Details: "Maecenas sodales eros sed odio vehicula, at fringilla ligula tempor. Vestibulum tincidunt aliquam leo, ut pharetra purus facilisis a. Fusce sollicitudin nisi in gravida molestie. Aliquam sed blandit mauris, fermentum fermentum elit. Aenean non sem in erat faucibus porttitor eu sed libero. Morbi lobortis turpis eu lacus rutrum a volutpat nisi porta.",
      Pic: "./assets/hotel-problem.png"
    },
    {
      roomID: 11,
      roomOwner: "okht khaled",
      timeSent: "12:34 pm",
      PhoneNumber: "12 345 678",
      Title: "something as a report title",
      Details: "Maecenas sodales eros sed odio vehicula, at fringilla ligula tempor. Vestibulum tincidunt aliquam leo, ut pharetra purus facilisis a. Fusce sollicitudin nisi in gravida molestie. Aliquam sed blandit mauris, fermentum fermentum elit. Aenean non sem in erat faucibus porttitor eu sed libero. Morbi lobortis turpis eu lacus rutrum a volutpat nisi porta.",
      Pic: "./assets/hotel-problem.png"
    },
    {
      roomID: 6,
      roomOwner: " bent khaled",
      timeSent: "06:06 pm",
      PhoneNumber: "66 666 666",
      Title: "something as a report title",
      Details: "Maecenas sodales eros sed odio vehicula, at fringilla ligula tempor. Vestibulum tincidunt aliquam leo, ut pharetra purus facilisis a. Fusce sollicitudin nisi in gravida molestie. Aliquam sed blandit mauris, fermentum fermentum elit. Aenean non sem in erat faucibus porttitor eu sed libero. Morbi lobortis turpis eu lacus rutrum a volutpat nisi porta.",
      Pic: "./assets/hotel-problem.png"
    }
   
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
