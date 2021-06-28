import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-security',
  templateUrl: './room-security.component.html',
  styleUrls: ['./room-security.component.css']
})
export class RoomSecurityComponent implements OnInit {
door:boolean = true;
doorstatus:string= "Closed"
  constructor() { }

  ngOnInit(): void {
  }
doorswitch(door:boolean){
 if (door){
   this.door=!this.door
   this.doorstatus="Open"
 } else{
  this.door=!this.door
  this.doorstatus="Closed"
 }
}
}
