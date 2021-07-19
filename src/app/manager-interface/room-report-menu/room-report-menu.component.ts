import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ReportModel } from 'src/app/Models/report-model';
import { DataImporterService } from 'src/app/Services/data-importer.service'; 

@Component({
  selector: 'app-room-report-menu',
  templateUrl: './room-report-menu.component.html',
  styleUrls: ['./room-report-menu.component.css']
})
export class RoomReportMenuComponent implements OnInit {

  reports: ReportModel[] = []

  constructor(private dataImporter: DataImporterService ) {
    this.dataImporter.reportImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.reports = result;
        console.log(this.reports)

      })

   }

  ngOnInit(): void {
  }

}
