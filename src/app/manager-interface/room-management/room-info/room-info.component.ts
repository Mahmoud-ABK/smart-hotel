import { Component, OnInit } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { RoomInfo } from 'src/app/Models/room-info';
import { RoomModel } from 'src/app/Models/room-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {
  id
  Roominfo: RoomInfo = new RoomInfo()
  room: RoomModel = new RoomModel()
  GuestList: GuestDataModel[]=[]
  constructor(public activeRoute: ActivatedRoute, public dataimporter: DataImporterService) {
    dataimporter.currentEmailrelatedData('').subscribe(res =>{ this.GuestList= res
      activeRoute.params.subscribe((param) => {


        this.id = param.Rid
        this.dataimporter.RoomImporterForinfo(param.Rid).snapshotChanges()
          .pipe(map(changes => changes.payload.val())).subscribe((result: RoomModel) => {


            this.room = result
            this.Roominfo
            const Namenum=this.NameNumberRetriever(result.guestHistoryID)
            //Room related
            this.Roominfo.roomid = result.roomid
            this.Roominfo.RoomPrice = result.RoomPrice
            this.Roominfo.RoomTemperature = result.RoomTemperature
            this.Roominfo.Roomhumidity = result.Roomhumidity
            this.Roominfo.RoomLighting = this.RoomLightening(result.RoomLighting)
            this.Roominfo.doorOpen = result.doorOpen
            this.Roominfo.doorHistoryArchive = this.ToArray(result.doorHistoryArchive)
            this.Roominfo.WaterTemperature = result.WaterTemperature
            console.log(result.WaterTemperature);

            //Guestrelated
            this.Roominfo.listOfGuestsNames = Namenum[0]
            this.Roominfo.listOfGuestNumbers = Namenum[1]
            this.Roominfo.RoomCheckinDate = result.RoomCheckinDate
            this.Roominfo.RoomCheckoutDate = result.RoomCheckoutDate
            this.Roominfo.guestHistoryID = result.guestHistoryID
            console.log(this.Roominfo);
            console.log( this.Roominfo.doorHistoryArchive );






          })
      })}

    )

  }

  ngOnInit(): void {
  }
  ToArray(object):[string,unknown][]{
  return Object.values(object)
  }
  NameNumberRetriever(emailArray: string[]): [string[], string[]] {
    let names: string[] = []
    let numbers: string[] = []

    emailArray.forEach(email => {
      this.GuestList.forEach((guestdata: GuestDataModel) => {
        if (email === guestdata.Email) {
          names.push(guestdata.FirstName + ' ' + guestdata.LastName)
          numbers.push(String(guestdata.PhoneNumber))
        }
      })
    });
    return [names, numbers]


  }
  RoomLightening(lightStat: [Boolean, Boolean, Boolean, Boolean]): string[] {
    const result: string[] = []
    lightStat.forEach(bool => {
      if (bool) {
        result.push('On')

      } else { result.push('Off') }
    })
    return result
  }
  typechecker(price){
    switch (price) {
      case 90:
        return ' oridnary '
        break;
      case 120:
        return ' ground floor '
        break;
      case 150:
        return ' sea view'
        break;
      case 180:
        return ' ground floor with sea view'
        break;

    }
  }

}
