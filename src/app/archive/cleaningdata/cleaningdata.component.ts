import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Cleaning } from 'src/app/Models/cleaning.model';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-cleaningdata',
  templateUrl: './cleaningdata.component.html',
  styleUrls: ['./cleaningdata.component.css']
})
export class CleaningdataComponent implements OnInit {

  param:boolean
  services: Cleaning[] = []
  constructor(private dataImporter: DataImporterService, private servantguard:KitchenService,  public route : Router) {
    this.dataImporter.cleaningDataArchiveImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.services = result;
        console.log(this.services)

      })

  }

  ngOnInit(): void {
  }

}
