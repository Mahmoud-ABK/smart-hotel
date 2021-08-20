import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';
import { SignInUpService } from 'src/app/Services/sign-in-up.service';
import AOS from 'aos'

@Component({
  selector: 'app-imageuploadcompo',
  templateUrl: './imageuploadcompo.component.html',
  styleUrls: ['./imageuploadcompo.component.css']
})
export class ImageuploadcompoComponent implements OnInit {
  profilePic: string="https://firebasestorage.googleapis.com/v0/b/smarthotel-database.appspot.com/o/user-profile.svg?alt=media&token=a3567d4c-824e-4916-89a7-868bb3f361de"
url:any
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  next = false
  waiting = false
  usedEmail = false
  uploaded=false
  nom="ben hichem"
  prenom="mahmoud"
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


  ngOnInit(): void {
    AOS.init()
  }
  OnSubmit(form: NgForm) {
    this.dataImporter.step1GuestData.Pic = this.profilePic
    console.log(this.dataImporter.step1GuestData);


  }

  handleEnterKeyPress(event) {
    const tagName = event.target.tagName.toLowerCase();
    if (tagName !== 'textarea') {
      return false;
    }
  }
}
