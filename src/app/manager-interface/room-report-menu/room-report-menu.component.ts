import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
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

  constructor(private dataImporter: DataImporterService, public notification:NotifierService ) {
    /* localStorage.removeItem('report') */
    this.dataImporter.reportImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ repkey: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.reports = result;
        console.log(this.reports)
      /*   const rep:[] =JSON.parse(localStorage.getItem('reports'))
        if (this.reports.length!= rep.length) {
          notification.notify('warning','New Report')
          this.audioplayer()
          localStorage.setItem('reports',JSON.stringify(this.reports))
        } */


      })


   }

  ngOnInit(): void {
  }
  audioplayer(){
    let file = new Audio();
    file.src = "../../../assets/mixkit-message-pop-alert-2354.mp3";
    file.load();
    file.play();
  }
  read(key:any,bool:boolean){
    this.dataImporter.db.object('/RoomReports/'+key).update({
      'read': !bool
    })

  }
  marker(){
    this.reports.forEach(rep=>{
      this.read(rep.repkey,false)
    })


  }
}
