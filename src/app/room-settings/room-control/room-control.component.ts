import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-control',
  templateUrl: './room-control.component.html',
  styleUrls: ['./room-control.component.css']
})
export class RoomControlComponent implements OnInit {
 disable={
   a:true,
   b:true,
   c:true,

 }

  constructor() { }

  ngOnInit(): void {
  }


}
