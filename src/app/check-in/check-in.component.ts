import AOS from 'aos'
import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataImporterService } from '../Services/data-importer.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css'] ,
  encapsulation: ViewEncapsulation.None
})
export class CheckInComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  step4=false
  step2=false
  step3=false
  imgup=false

  displayer(event)
  {
    this.step4=event
  }
  displayer2(event)
  {
    this.step2=event
  }
   displayerimgup(event)
  {
    this.imgup=event
  }
  displayername($event){

  }
  constructor( private _formBuilder: FormBuilder, public dataImporter:DataImporterService) {


   }

  ngOnInit(): void {
    AOS.init()
    this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  }

}
