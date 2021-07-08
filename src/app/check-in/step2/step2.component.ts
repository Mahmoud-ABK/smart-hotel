import { SimpleChanges } from '@angular/core';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  RoomsTest: Array<{ Roomid: number, price: number, checkinRoom: Array<string>, checkoutRoom: Array<any> }> = [
    {
      Roomid: 1,
      price: 10,
      checkinRoom: [],
      checkoutRoom: [],
    },
    {
      Roomid: 2,
      price: 20,
      checkinRoom: ["2021-07-10"],
      checkoutRoom: ["2021-07-12"],

    },
    {
      Roomid: 3,
      price: 30,
      checkinRoom: ["2021-07-13", "2021-07-17"],
      checkoutRoom: ["2021-07-16", "2021-07-19"],
    },
    {
      Roomid: 4,
      price: 40,
      checkinRoom: ["2021-08-04", "2021-08-25", "2021-10-18"],
      checkoutRoom: ["2021-08-22", "2021-09-18", "2021-12-18"],
    },
  ]
  AvailableRoomList: [] = []
  RoomlistDisplay: boolean = false
  chImin = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  chOmin = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  checkin: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  checkout: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor() {
  }

  ngOnInit(): void {
    this.checker()

  }

  checker() {

    let main = setInterval(() => {
      let parsedCHECKIN = Date.parse(this.checkin)
      let parsedCHECKOUT = Date.parse(this.checkout)
      let inFunctionAVAILABLE:any = []
      this.RoomsTest.forEach(RoomSample => {

        let Roomcheckin = RoomSample.checkinRoom
        let Roomcheckout = RoomSample.checkoutRoom
        let checkie = []
        if (Roomcheckin.length === 0 && Roomcheckout.length === 0) {
          checkie.push(true)
        } else {
          for (let i = 0; i < Roomcheckin.length; i++) {
            if ((parsedCHECKIN < Date.parse(Roomcheckin[i]) && parsedCHECKOUT < Date.parse(Roomcheckin[i]))
              || (parsedCHECKIN > Date.parse(Roomcheckout[i]) && parsedCHECKOUT > Date.parse(Roomcheckout[i]))
            ) {
              checkie.push(true)
            } else {
              checkie.push(false)
            }
          }
        }
        // console.log(checkie)
        if (!checkie.includes(false)) {
          inFunctionAVAILABLE.push(RoomSample.Roomid)
        }
      })
      this.AvailableRoomList = inFunctionAVAILABLE
      console.log(this.AvailableRoomList)
    }, 2000)

  }

}
