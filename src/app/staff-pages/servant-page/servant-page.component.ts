import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servant-page',
  templateUrl: './servant-page.component.html',
  styleUrls: ['./servant-page.component.css']
})
export class ServantPageComponent implements OnInit {

  services:Array<object>=[
    {
      roomID:1,
      roomOwner:"khalid",
      Time:"26.00"
    },
    {
      roomID:2,
      roomOwner:"om khalid",
      Time:"29.00"
    },
    {
      roomID:3,
      roomOwner:"sghar khalid",
      Time:"36.00"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  remove(a:object) {
    this.services.forEach((service, index) => {
      if (service === a) this.services.splice(index, 1);
    });
  }
}
