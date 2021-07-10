import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-room-report',
  templateUrl: './room-report.component.html',
  styleUrls: ['./room-report.component.css']
})
export class RoomReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value.problemTitle);
    console.log(form.value.problemDesciption);
    console.log(form.value.formFileLg);
  }
}
