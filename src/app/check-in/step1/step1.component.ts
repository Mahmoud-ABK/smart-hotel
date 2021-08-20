import { Component, OnInit,  EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { RoomModel } from 'src/app/Models/room-model';
import { Step1data } from 'src/app/Models/step1data';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';
import { SignInUpService } from 'src/app/Services/sign-in-up.service';
import AOS from 'aos'



@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'] ,

})

export class Step1Component implements OnInit {
  @Output() namedisplay: EventEmitter<string> = new EventEmitter<string>()
  name(name) {
    this.namedisplay.emit(name)

  }
  step1data: Step1data
profilePic: string="https://firebasestorage.googleapis.com/v0/b/smarthotel-database.appspot.com/o/user-profile.svg?alt=media&token=a3567d4c-824e-4916-89a7-868bb3f361de"
url:any
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  next = false
  waiting = false
  usedEmail = false
  uploaded=false


  constructor(public InApp:InAppOperationsService,private dataImporter: DataImporterService, private firestorage: AngularFireStorage, public signingIn: SignInUpService) { }
  onFileSelected(event) {

    this.waiting = true
    this.InApp.Snackbar.open('uploading','close',{ panelClass:"uploadedsnackbar"})
    /*  if (!(event.target.files.length==0)){
     this.profilePic = event.target.files[0];
     console.log(this.profilePic);} */
    const id = Math.random().toString(36).substring(2);
    this.ref = this.firestorage.ref(id);
    this.task = this.ref.put(event.target.files[0])
    this.task.then((data) => {
      data.ref.getDownloadURL().then((url) => {
        console.log(url);

        this.profilePic = String(url)
        this.url=String(url)
        console.log(this.profilePic)
        this.uploaded=true
        this.waiting = false
       this.InApp.Snackbar.open('image uploaded','close',{duration:4000, panelClass:"uploadedsnackbar"})

      })
    })


  }
  emailChcecker(email) {
    if (this.signingIn.currentGuests.includes(email)) {
      this.usedEmail = true
    } else {
      this.usedEmail = false
    }
  }
  ngOnInit(): void {
    // this.InApp.Snackbar.open('test','s',{panelClass:'uploadedsnackbar'})
    AOS.init()

  }
  OnSubmit(form: NgForm) {

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
    this.step1data = {
      Pic: this.profilePic,
      Firstname: form.value.guestFirstName,
      Lastname: form.value.guestLastname,
      IDorPass: form.value.guestIDorPass,
      Birthdate: form.value.guestBirthdate,
      Email: form.value.guestEmail,
      Password: form.value.guestPassword,
      PhoneNum: form.value.guestPhoneNum,
      nights: form.value.NoOfNights,
      people: form.value.NoOfPeople
    }
    console.log(this.step1data);
    this.dataImporter.ToStep3(this.step1data)
   this.name(form.value.guestFirstName)





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
