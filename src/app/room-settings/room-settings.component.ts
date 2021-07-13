
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-settings',
  templateUrl: './room-settings.component.html',
  styleUrls: ['./room-settings.component.css']
})
export class RoomSettingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onReport(){
    this.router.navigate(["/guestinterface"]);
  }
}
