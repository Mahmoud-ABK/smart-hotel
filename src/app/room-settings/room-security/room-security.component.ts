import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-room-security',
  templateUrl: './room-security.component.html',
  styleUrls: ['./room-security.component.css']
})
export class RoomSecurityComponent implements OnInit {
door:boolean = true;
doorstatus:string= "Closed"
historyList:{action:string , time:any}[]=[

]
  constructor() { }

  ngOnInit(): void {
    // console.log(formatDate(new Date(), 'MMMM d, y, h:mm a','en-US'));

  }
doorswitch(door:boolean){
 if (door){

   this.doorstatus="Open"
   console.log(door)
 } else{

  this.doorstatus="Closed"
 }
 this.door=!this.door
}
adderToHistory(status:string){
this.historyList.push({action:status.toLowerCase() ,time:formatDate(new Date(), 'MMM d, y, h:mm:ss a','en-US')})
console.log(this.historyList);

}

}
