import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { map } from 'rxjs';
import { ReportModel } from 'src/app/Models/report-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { RoomModel } from '../Models/room-model';
import { TranslatedRoomData } from '../Models/translated-room-data';
import { KitchenService } from '../Services/kitchen.service';

@Component({
  selector: 'app-manager-interface',
  templateUrl: './manager-interface.component.html',
  styleUrls: ['./manager-interface.component.css']
})
export class ManagerInterfaceComponent implements OnInit {

  rooms: RoomModel[] = []

  constructor(private dataImporter: DataImporterService, public notification: NotifierService, public logout: KitchenService, public router: Router) {

    this.dataImporter.reportImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        const reports = result;
        console.log(reports)
     
        const rep: [] = JSON.parse(localStorage.getItem('reports'))
        if (reports.length != rep.length) {
          notification.notify('warning', 'New Report')
          this.audioplayer()
          localStorage.setItem('reports', JSON.stringify(reports))
        }



      })

    this.dataImporter.RoomImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {


        this.rooms = result;

        this.rooms.forEach((room, index) => {
          this.notification.hide(`fire${room.roomid}`)
          this.notification.hide(`gas${room.roomid}`)
          if (room.Gas) {


            this.notification.notify('error', 'Gas problem at room number ' + String(room.roomid), `gas${room.roomid}`)
            this.audioplayer()
          } else {
            this.notification.hide(`gas${room.roomid}`)
          }
          if (room.Fire) {

            this.notification.notify('error', 'Fire problem at room number ' + String(room.roomid), `fire${room.roomid}`)
            this.audioplayer()
          } else {
            this.notification.hide(`fire${room.roomid}`)
          }

        })

      })






  }


  ngOnInit(): void {
  }
  audioplayer() {
    let file = new Audio();
    file.src = "../../assets/mixkit-message-pop-alert-2354.mp3";
    file.load();
    file.play();
  }
  loggingOut() {
    this.logout.managerdataretriever(false)
    this.router.navigate(['managerlogin'])


  }
}
