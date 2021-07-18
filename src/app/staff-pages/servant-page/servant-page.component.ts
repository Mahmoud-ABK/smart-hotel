import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cleaning } from 'src/app/Models/cleaning.model';
import { DataImporterService } from 'src/app/Services/data-importer.service';

@Component({
  selector: 'app-servant-page',
  templateUrl: './servant-page.component.html',
  styleUrls: ['./servant-page.component.css']
})
export class ServantPageComponent implements OnInit {

  
  services:Cleaning[] = []
  constructor(private dataImporter: DataImporterService) { 
    this.dataImporter.cleaningImporter().snapshotChanges()
    .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

      this.services= result;
      console.log(this.services)

    })

  }

  ngOnInit(): void {
  }
  remove(a:object) {
    this.services.forEach((service, index) => {
      if (service === a){
        this.dataImporter. cleaningRemover(index);

      } 
     });
  }

}
