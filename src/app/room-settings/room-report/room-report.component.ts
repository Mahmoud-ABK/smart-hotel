import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { ReportModel } from 'src/app/Models/report-model';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';
@Component({
  selector: 'app-room-report',
  templateUrl: './room-report.component.html',
  styleUrls: ['./room-report.component.css']
})
export class RoomReportComponent implements OnInit {
  reportPic: string
  waiting = false
  noImg: string = "noImg"
  report: ReportModel = new ReportModel()
  todaysDate = formatDate(new Date(), 'hh:mm a', 'en');


  constructor(private firestorage: AngularFireStorage, public inApp: InAppOperationsService) { }
  onFileSelected(event) {
    this.waiting = true

    var task: AngularFireUploadTask;
    var ref: AngularFireStorageReference
    /*  if (!(event.target.files.length==0)){
     this.profilePic = event.target.files[0];
     console.log(this.profilePic);} */
    const id = Math.random().toString(36).substring(2);
    ref = this.firestorage.ref(id);
    task = ref.put(event.target.files[0])
    task.then((data) => {
      data.ref.getDownloadURL().then((url) => {
        console.log(url);

        this.reportPic = String(url)
        console.log(this.reportPic)
        this.waiting = false

      })
    })

  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    /*    console.log(this.inApp.RoomID);
       console.log(this.inApp.currentLoginInData.FirstName);
       console.log(this.inApp.currentLoginInData.LastName);
       console.log(this.inApp.currentLoginInData.PhoneNumber);
       console.log(this.inApp.currentLoginInData.Email);
       console.log(form.value.problemTitle);
       console.log(form.value.problemDesciption);
       if (this.reportPic === undefined) {
         console.log(this.noImg);


       } else {
         console.log(this.reportPic);

       }; */
    this.report.roomid = this.inApp.RoomID
    this.report.firstname = this.inApp.currentLoginInData.FirstName
    this.report.lastname = this.inApp.currentLoginInData.LastName
    this.report.num = this.inApp.currentLoginInData.PhoneNumber
    this.report.email = this.inApp.currentLoginInData.Email
    this.report.reporttitle = form.value.problemTitle
    this.report.reportdes = form.value.problemDesciption
    this.report.timesent = this.todaysDate
    if (this.reportPic === undefined) {
      this.report.img = this.noImg


    } else {
      this.report.img = this.reportPic;

    };
    console.log(this.report);
  this.inApp.multiPusher('/RoomReports',this.report,'Report Sent')
  }
}
