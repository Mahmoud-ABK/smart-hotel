import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-services',
  templateUrl: './room-services.component.html',
  styleUrls: ['./room-services.component.css']
})
export class RoomServicesComponent implements OnInit {
disable:boolean

  constructor(public router:Router, public thisroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value.cleaningDateTime);
    console.log("hey")
  }
  ToFoodmenu(){
    this.router.navigate(['/foodmenu'])
  }
}
