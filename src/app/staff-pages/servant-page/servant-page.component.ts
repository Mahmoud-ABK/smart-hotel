import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Cleaning } from 'src/app/Models/cleaning.model';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-servant-page',
  templateUrl: './servant-page.component.html',
  styleUrls: ['./servant-page.component.css']
})
export class ServantPageComponent implements OnInit {

  param:boolean
  services: Cleaning[] = []
  constructor(private dataImporter: DataImporterService, private servantguard:KitchenService,  public route : Router ) {
    this.dataImporter.cleaningImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.services = result;
        console.log(this.services)

      })

  }

  ngOnInit(): void {
  }
  remove(a: object) {
    this.services.forEach((service, index) => {
      if (service === a) {
        this.services.splice(index, 1)
      }
    });
    this.dataImporter.db.object('/').update({
      CleaningDataList: this.services
    })
  }
 logout(){
  localStorage.removeItem('serAccess')
  this.param=false
  this.servantguard.servantdataretriever(this.param)
  this.route.navigate(['/loginroundabout'])
 }
}
