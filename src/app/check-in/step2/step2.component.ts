import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { formatDate } from '@angular/common';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { RoomModel } from 'src/app/Models/room-model';
import { map } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  @Output() step3display: EventEmitter<boolean> = new EventEmitter<boolean>()
  step3() {
    this.step3display.emit(true)

  }

  RoomList: RoomModel[] = []
  AvailableRoomList: Array<RoomModel> = []
  RoomlistDisplay: boolean = false
  add = Date.parse(formatDate(new Date(), 'yyyy-MM-dd', 'en')) + (1000 * 60 * 60 * 24)
  chImin = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  chOmin = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  checkin: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  checkout: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  selectedRooms: RoomModel[] = [];
  confirmed: boolean = false

  ordinarytype: boolean = false
  floortype: boolean = false
  seaviewtype: boolean = false
  seaviewfloortype: boolean = false

  roomIDS: Array<{
    id: number,
    length: number
  }> = []
modalcloser(){
  this.confirmed=true
  this.modalService.dismissAll()
}

  constructor(private dataImporter: DataImporterService , public modalService: NgbModal) {
    this.dataImporter.RoomImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.RoomList = result;
        console.log(this.RoomList);

        this.checker()



      })




  }
  modalopener(content){
    this.modalService.open(content, { centered: true , size: 'lg' ,  scrollable: true  })

  }
  ngOnInit(): void {

  }

  checker() {
    this.RoomlistDisplay = true
    let parsedCHECKIN = Date.parse(this.checkin)
    let parsedCHECKOUT = Date.parse(this.checkout)
    let inFunctionAVAILABLE: any = []
    this.RoomList.forEach(RoomSample => {

      let Roomcheckin = RoomSample.RoomCheckinDate
      let Roomcheckout = RoomSample.RoomCheckoutDate
      let checkie = []
      if (Roomcheckin.length == 1) {
        checkie.push(true)
      } else {
        for (let i = 1; i < Roomcheckin.length; i++) {

          if ((parsedCHECKIN <= Date.parse(Roomcheckin[i]) && parsedCHECKOUT <= Date.parse(Roomcheckin[i]))
            || (parsedCHECKIN >= Date.parse(Roomcheckout[i]) && parsedCHECKOUT >= Date.parse(Roomcheckout[i]))
          ) {
            checkie.push(true)
          } else {
            checkie.push(false)
          }
        }
      }
      // console.log(checkie)
      if (!checkie.includes(false)) {
        inFunctionAVAILABLE.push(RoomSample)
      }
    })
    this.AvailableRoomList = inFunctionAVAILABLE

    this.AvailableRoomList.forEach(avRoom => {
      if (avRoom.RoomPrice == 90) {
        this.ordinarytype = true
        console.log(this.ordinarytype);
      } else if (avRoom.RoomPrice == 120) {
        this.floortype = true
        console.log(this.floortype);
      } else if (avRoom.RoomPrice == 150) {
        this.seaviewtype = true
        console.log(this.seaviewtype);
      } else {
        this.seaviewfloortype = true
        console.log(this.seaviewtype);
      }
    })


  }

  typechecker(object: { Roomid: number, price: number, checkinRoom: Array<string>, checkoutRoom: Array<any> }, price: number, typepresence: boolean) {
    //to check if types exist
    if (object.price === price) {
      typepresence = true
    }

  }

  selector(room: RoomModel) {
    if (!(this.selectedRooms.includes(room))) {
      this.selectedRooms.push(room)
      console.log(this.selectedRooms);
    } else {
      this.selectedRooms.forEach((selected, index) => {
        if (selected === room) {
          this.selectedRooms.splice(index, 1);
        }

      });
      console.log(this.selectedRooms);


    }


    // console.log(this.selectedRooms);

  }
  deleter(room: RoomModel) {
    this.selectedRooms.forEach((selected, index) => {
      if (selected === room) {
        this.selectedRooms.splice(index, 1);
      }

    });
    if (this.selectedRooms.length==0) {
      this.modalService.dismissAll()

    }
    
    console.log(this.selectedRooms);

  }
  inialize() {
    this.selectedRooms = [];
    this.ordinarytype = false
    this.floortype = false
    this.seaviewtype = false
    this.seaviewfloortype = false
  }


  toArray() {
    this.selectedRooms.forEach(element => {
      this.roomIDS.push({ id: element.roomid, length: element.RoomCheckinDate.length }
      )
    });
  }

  onSubmit() {
    this.toArray()
    console.log(this.roomIDS);

    // console.log(this.selectedRooms);
    // console.log(this.checkin)
    // console.log(this.checkout);
    this.dataImporter.ToStep3fromStep2({
      Roomids: this.roomIDS,
      SelectedRooms: this.selectedRooms,
      checkin: this.checkin,
      checkout: this.checkout,

    })
    this.step3()
  }
  type(price: number) {
    switch (price) {
      case 90:
        return ' oridnary '
        break;
      case 120:
        return ' ground floor '
        break;
      case 150:
        return ' sea view'
        break;
      case 180:
        return ' ground floor with sea view'
        break;

    }

  }

}
