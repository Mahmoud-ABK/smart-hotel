import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';

@Component({
  selector: 'app-room-control',
  templateUrl: './room-control.component.html',
  styleUrls: ['./room-control.component.css']
})
export class RoomControlComponent implements OnInit ,OnDestroy {
  disable = {
    a: true,
    b: true,
    c: true,

  }
  lights = {
    a: false,
    b: false,
    c: false,
    d: false,
  }
id:number
  constructor(public inApp:InAppOperationsService,private _snackBar: MatSnackBar) {
    console.log(this.inApp.RoomID)
    this.id=this.inApp.RoomID
  }

  ngOnInit(): void {
  }
  openSnackBar(message: string) {
    this._snackBar.open(message,'',{
      duration:3000
    });
  }
  onSubmit(form: NgForm) {

    this.inApp.updating(
      this.inApp.RoomID,
      this.undefinedtem(form.value.tempvalue),
      this.undefinedhum(form.value.hvalue),
      [this.lights.a,this.lights.b,this.lights.c,this.lights.d],
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
  undefinedtem(formcontrol:any) {
    if (formcontrol == undefined || formcontrol=='' || formcontrol>35 || formcontrol<16 ) {
      return 26
    } else {
      return formcontrol
    }
  }
  undefinedhum(formcontrol: any ) {
    if (formcontrol == undefined || formcontrol=='' || formcontrol>60 || formcontrol<20) {
      return 30
    } else {
      return formcontrol
    }
  }
  undefinedwatertemp(formcontrol: any) {
    if (formcontrol == undefined || formcontrol=='' || formcontrol>41 || formcontrol<30) {
      return 37
    } else {
      return formcontrol
    }
  }
  ngOnDestroy(){
    this.inApp.RoomID= this.id
    console.log(this.inApp.RoomID);

  }
}
