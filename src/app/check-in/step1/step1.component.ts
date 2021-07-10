import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  profilePic:any="/assets/user-profile.svg"
  onFileSelected(event) {
    if (!(event.target.files.length==0)){
    this.profilePic = event.target.files[event.target.files.length-1];
    console.log(this.profilePic);}
  }

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(form:NgForm){
    console.log(this.profilePic)
    console.log(form.value.guestFirstName)
    console.log(form.value.guestLastname)
    console.log(form.value.guestIDorPass)
    console.log(form.value.guestBirthdate)
    console.log(form.value.guestEmail)
    console.log(form.value.guestPassword)
    console.log(form.value.guestPhoneNum)
    console.log(form.value.NoOfNights)
    console.log(form.value.NoOfPeople)



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
