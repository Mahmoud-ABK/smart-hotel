
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-room-settings',
  templateUrl: './room-settings.component.html',
  styleUrls: ['./room-settings.component.css']
})
export class RoomSettingsComponent implements OnInit {

  constructor(private router:Router,public loggingOut:SignInUpService) { }

  ngOnInit(): void {
  }
  onReport(){
    this.router.navigate(["/guestinterface"]);
  }
  onLogout(){
    this.loggingOut.loggingOut()
  }
}
