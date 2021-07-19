import { Component, OnDestroy, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';
@Component({
  selector: 'app-room-security',
  templateUrl: './room-security.component.html',
  styleUrls: ['./room-security.component.css']
})
export class RoomSecurityComponent implements OnInit , OnDestroy {
  doorOpen: boolean = true;
  doorstatus: string = "Closed"
  historyList: { action: string, time: any }[] = [
  ]

  constructor(public inApp: InAppOperationsService) { }

  ngOnInit(): void {
    this.inApp.RoomID=+localStorage.getItem('Rid')
    this.inApp.doorHistoryImporter(this.inApp.RoomID).subscribe(res =>
      this.historyList = res
    )

    // console.log(formatDate(new Date(), 'MMMM d, y, h:mm a','en-US'));

  }
  doorswitch(door: boolean) {
    if (door) {

      this.doorstatus = "Open"
      console.log(door)
    } else {
      console.log(door)
      this.doorstatus = "Closed"
    }
    this.doorOpen = !this.doorOpen
  }
  bigFun(a,b){
    this.doorswitch(a)
    this.adderToHistory(b)

  }
  adderToHistory(status: string) {
    this.inApp.doorStatusUpdater(this.inApp.RoomID, !this.doorOpen)
    this.inApp.doorhisoryUpdater(this.inApp.RoomID, { action: status.toLowerCase(), time: formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en-US') })
  //  this.historyList.push({ action: status.toLowerCase(), time: formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en-US') })
    console.log(this.historyList);
  }
  Clearer(){
    return this.inApp.db.object('/Rooms/' + String(this.inApp.RoomID)).update({
      doorHistory:{ '0': {
        action: 'empty',
        test: 'test'}
      }
    })
  }
  ngOnDestroy(){
    this.inApp.RoomID= this.inApp.RoomID
  }

}
