import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
 lights={
   a:false,
   b:false,
   c:false,
   d:false
 }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log("hey")
    console.log(this.undefinedtem(form.value.tempvalue));
    console.log(this.undefinedhum(form.value.hvalue));
    console.log(this.lights.a);
    console.log(form.value.lightswitch2);
    console.log(form.value.lightswitch3);
    console.log(form.value.lightswitch4);
    console.log(this.undefinedwatertemp(form.value.watertempvalue));
  }
  undefinedtem(formcontrol:any){
if (formcontrol==undefined){
  return 25
}else{
  return formcontrol
}
  }
  undefinedhum(formcontrol:any){
    if (formcontrol==undefined){
      return 30
    }else{
      return formcontrol
    }
      }
      undefinedwatertemp(formcontrol:any){
        if (formcontrol==undefined){
          return 70
        }else{
          return formcontrol
        }
          }
}
