import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RoomModel } from 'src/app/Models/room-model';
import { TranslatedRoomData } from 'src/app/Models/translated-room-data';
import { DataImporterService } from 'src/app/Services/data-importer.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {



  rooms: RoomModel[] = []
  translation: TranslatedRoomData[] = []
  constructor(private dataImporter: DataImporterService) {
    this.dataImporter.RoomImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {
        this.translation = []
        this.rooms = result;
        console.log(this.rooms)
        this.rooms.forEach((room, index) => {
          let translated: TranslatedRoomData = new TranslatedRoomData()
          translated.roomid = room.roomid
          if (room.Gas) {
            translated.Gas = 'Not Safe !'
          } else {
            translated.Gas = ' Safe '
          }
          if (room.Fire >= 500) {
            translated.Fire = 'Not Safe !'
          } else {
            translated.Fire = ' Safe '
          }
          if (room.doorOpen) {
            translated.Door = 'Open'
          } else {
            translated.Door = 'Closed'
          }
          translated.CurrentEmail = this.checker(room.guestHistoryID, room.RoomCheckinDate, room.RoomCheckoutDate).Email
          translated.availibility = this.checker(room.guestHistoryID, room.RoomCheckinDate, room.RoomCheckoutDate).availibility

          this.translation.push(translated)
        })

      })



  }

  ngOnInit(): void {

  }
  /*  checker() {


     let main = setInterval(() => {
       let currentEmail
       let available
       let todaysdate=Date.now()
       let inFunctionAVAILABLE: any = []
       this.rooms.forEach(RoomSample => {
         let Roomcheckin = RoomSample.RoomCheckinDate
         let Roomcheckout = RoomSample.RoomCheckoutDate
         let checkie = []
         if (Roomcheckin.length==1) {
           checkie.push(true)
         } else {
           for (let i =1; i < Roomcheckin.length; i++) {

             if ((todaysdate <= Date.parse(Roomcheckin[i]) && todaysdate <= Date.parse(Roomcheckin[i]))
               || (todaysdate >= Date.parse(Roomcheckout[i]) && todaysdate >= Date.parse(Roomcheckout[i]))
             ) {
               checkie.push(true)
             } else {
               checkie.push(false)
             }
           }
         }
         // console.log(checkie)
         if (!checkie.includes(false)) {


         }
       })

     }, 100)

   } */
  checker(iDhistory: string[], checkinHistory: string[], checkoutHistory: string[]): {
    Email: string,
    availibility: string
  } {
    var todaysdate = Date.now()
    var Avcheckie: any[]=[]
    for (let index = 1; index < iDhistory.length; index++) {
      if ((todaysdate > Date.parse(checkinHistory[index])) && (todaysdate < Date.parse(checkoutHistory[index]))) {
        Avcheckie.push(iDhistory[index])
      }
    }
    if (Avcheckie.length == 0) {
      return {
        Email: "room is empty",
        availibility: "available"
      }
    } else {
      return {
        Email: Avcheckie[0],
        availibility: "occupied"
      }
    }
  }


}
