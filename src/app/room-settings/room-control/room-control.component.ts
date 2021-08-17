import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { RoomModel } from 'src/app/Models/room-model';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';
import { allIcons } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-room-control',
  templateUrl: './room-control.component.html',
  styleUrls: ['./room-control.component.css']
})
export class RoomControlComponent implements OnInit, OnDestroy {
  OnOrOff: string
  Temp: number
  humidity: number
  watertemp: number
  disable = {
    a: true,
    b: true,
    c: true,

  }
  lights: [Boolean, Boolean, Boolean, Boolean] = [
    false,
    false,
    false,
    false,
  ]
  id: number
  constructor(public inApp: InAppOperationsService, private _snackBar: MatSnackBar,) {

    this.inApp.RoomID = +localStorage.getItem('Rid')
    console.log(this.inApp.RoomID)

    this.id = +localStorage.getItem('Rid')
    console.log(+localStorage.getItem('Rid'));

    this.inApp.db.object('Rooms/' + String(this.inApp.RoomID))
      .snapshotChanges().pipe
      (map(changes => changes.payload.val())).subscribe((res: RoomModel) => {
        console.log(res);
        this.lights = res.RoomLighting
        this.Temp = res.RoomTemperature
        this.humidity = res.Roomhumidity
        this.watertemp = res.WaterTemperature
        this.onornot()


      })
  }

  ngOnInit(): void {
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 3000, panelClass:"uploadedsnackbar"
    });
  }
  Updater(name: string, val: any, auto: boolean, def: any) {
    if (auto) {
      this.inApp.updatingPerPart(this.inApp.RoomID, name, def).then(() => {
        this.openSnackBar('Saved')
      })
    } else {
      this.inApp.updatingPerPart(this.inApp.RoomID, name, val).then(() => {
        this.openSnackBar('Saved')
      })
    }

  }

  onSubmit(form: NgForm) {

    this.inApp.updating(
      this.inApp.RoomID,
      this.undefinedtem(form.value.tempvalue),
      this.undefinedhum(form.value.hvalue),
      this.lights,
      this.undefinedwatertemp(form.value.watertempvalue)
    ).then(() => {
      this.openSnackBar('updated!')

    })
    console.log(this.undefinedtem(form.value.tempvalue));
    console.log(this.undefinedhum(form.value.hvalue));
    console.log(form.value.lightswitch1);
    console.log(form.value.lightswitch2);
    console.log(form.value.lightswitch3);
    console.log(form.value.lightswitch4);
    console.log(this.undefinedwatertemp(form.value.watertempvalue));
  }
  undefinedtem(formcontrol: any) {
    if (formcontrol == undefined || formcontrol == '' || formcontrol > 35 || formcontrol < 16) {
      return 26
    } else {
      return formcontrol
    }
  }
  undefinedhum(formcontrol: any) {
    if (formcontrol == undefined || formcontrol == '' || formcontrol > 60 || formcontrol < 20) {
      return 30
    } else {
      return formcontrol
    }
  }
  undefinedwatertemp(formcontrol: any) {
    if (formcontrol == undefined || formcontrol == '' || formcontrol > 41 || formcontrol < 30) {
      return 37
    } else {
      return formcontrol
    }
  }
  onornot() {
    if (this.lights.includes(false)) {
      this.OnOrOff = 'on'

    } else {
      this.OnOrOff = 'off'

    }
  }
  turner(event) {
    console.log(event);

    if (!event) {
      if (this.lights = [true, true, true, true]) {

        this.lights = [false, false, false, false]
        console.log(this.lights);

      } else {

        this.lights = [true, true, true, true]

      }




    } else {

      this.lights = [true, true, true, true]
      console.log(this.lights);


    }
    this.onornot()


  }
  ngOnDestroy() {
    this.inApp.RoomID = this.id
    console.log(this.inApp.RoomID);

  }
}
