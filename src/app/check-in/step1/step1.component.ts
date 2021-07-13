import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { RoomModel } from 'src/app/Models/room-model';
import { Step1data } from 'src/app/Models/step1data';
import { DataImporterService } from 'src/app/Services/data-importer.service';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  step1data:Step1data
  profilePic:any="/assets/user-profile.svg"
  onFileSelected(event) {
    if (!(event.target.files.length==0)){
    this.profilePic = event.target.files[event.target.files.length-1];
    console.log(this.profilePic);}
  }

  constructor(private dataImporter :DataImporterService) { }

  ngOnInit(): void {
  }
  OnSubmit(form:NgForm){
    /*console.log(this.profilePic)
    console.log(form.value.guestFirstName)
    console.log(form.value.guestLastname)
    console.log(form.value.guestIDorPass)
    console.log(form.value.guestBirthdate)
    console.log(form.value.guestEmail)
    console.log(form.value.guestPassword)
    console.log(form.value.guestPhoneNum)
    console.log(form.value.NoOfNights)
    console.log(form.value.NoOfPeople)*/
    this.step1data={
      Pic: this.profilePic ,
      Firstname:form.value.guestFirstName ,
      Lastname: form.value.guestLastname ,
      IDorPass: form.value.guestIDorPass,
      Birthdate: form.value.guestBirthdate,
      Email: form.value.guestEmail,
      Password: form.value.guestPassword,
      PhoneNum: form.value.guestPhoneNum,
      nights: form.value.NoOfNights,
      people:form.value.NoOfPeople
    }
    // console.log(this.step1data);
    this.dataImporter.ToStep3(this.step1data)





  }
//   NoOfNights: ""
// NoOfPeople: ""
// guestBirthdate: ""
// guestEmail: ""
// guestFirstName: ""
// guestIDorPass: ""
// guestLastname: ""
// guestPassword: ""
// guestPhoneNum: ""
// profilePic: ""

  handleEnterKeyPress(event) {
    const tagName = event.target.tagName.toLowerCase();
    if (tagName !== 'textarea') {
      return false;
    }
  }


}
