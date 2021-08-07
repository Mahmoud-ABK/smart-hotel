import { Component, OnInit } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RoomModel } from 'src/app/Models/room-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {
  id
  room:RoomModel=new RoomModel()
  constructor(public activeRoute: ActivatedRoute, public dataimporter: DataImporterService) {
    activeRoute.params.subscribe((a) => {

      console.log(a.Rid);
      this.id = a.Rid
      this.dataimporter.RoomImporterForinfo(a.Rid).snapshotChanges()
      .pipe(map(changes => changes.payload.val() )).subscribe((result:RoomModel) => {

        console.log(result);
        this.room=result



      })
    })
  }

  ngOnInit(): void {
  }

}
