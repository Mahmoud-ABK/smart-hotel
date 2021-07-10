import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-services',
  templateUrl: './room-services.component.html',
  styleUrls: ['./room-services.component.css']
})
export class RoomServicesComponent implements OnInit {
disable:boolean

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value.cleaningDateTime);
    console.log("hey")
  }
}
