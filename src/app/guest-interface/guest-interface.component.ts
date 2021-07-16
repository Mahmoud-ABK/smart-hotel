import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-guest-interface',
  templateUrl: './guest-interface.component.html',
  styleUrls: ['./guest-interface.component.css']
})
export class GuestInterfaceComponent implements OnInit {
rooms:Array<object>=[
  {
    roomID:3,
    checkoutDate:"33/33/3333"  },
  {
    roomID:7,
    checkoutDate:"6/63/3338"  },
  {
      roomID:9,
      checkoutDate:"33/33/3733"}
]
  constructor(public loggingOutService:SignInUpService , public route:Router) { }

  ngOnInit(): void {
  }
  loggingOut(){
    this.loggingOutService.loggingOut()
  }
}
