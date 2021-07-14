import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  step3=false
  displayer(event)
  {
    this.step3=event
  }

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  }

}
