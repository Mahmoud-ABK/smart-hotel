import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RoomModel } from 'src/app/Models/room-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {

 

  rooms: RoomModel[] = []
  constructor(private dataImporter:DataImporterService) { 
    this.dataImporter.RoomImporter().snapshotChanges()
    .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

      this.rooms= result;
      console.log(this.rooms)

    })


    
  }

  ngOnInit(): void {
    
  }
  HEYHEY(){
    
    console.log(this.rooms[0])
    console.log("HEY")
  }
}
