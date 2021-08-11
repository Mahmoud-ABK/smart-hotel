import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
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
  constructor(private dataImporter: DataImporterService, public notification:NotifierService) {
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
         /*    this.notification.notify('error','Gas problem at room number '+String(room.roomid),'gas'+String(room.roomid))
            this.audioplayer() */
          } else {
            translated.Gas = 'Safe'
            // this.notification.hide('gas'+String(room.roomid))
          }
          if (room.Fire ) {
            translated.Fire = 'Not Safe !'

          } else {
            translated.Fire = 'Safe'
            // this.notification.hide('fire'+String(room.roomid))
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
  badge(a,b){
    if(a==b && a=='Safe'){
      return null
    }else if(a!=b){
      return 1
    }else{
      return 2
    }

  }
audioplayer(){
  let file = new Audio();
  file.src = "../../../assets/mixkit-message-pop-alert-2354.mp3";
  file.load();
  file.play();
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
