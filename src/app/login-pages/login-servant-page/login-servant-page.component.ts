import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { KitchenauthGuard } from 'src/app/guards/kitchenauth.guard';
import { Kitchen } from 'src/app/Models/kitchen.model';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-login-servant-page',
  templateUrl: './login-servant-page.component.html',
  styleUrls: ['./login-servant-page.component.css']
})
export class LoginServantPageComponent implements OnInit {
  result:Kitchen=new Kitchen()
  loggedemail:any
  loggedpsw:any
  clicked:boolean=false
  a:boolean=true
  constructor(private servantdata : KitchenService, private kitchenstatus :KitchenauthGuard, public route : Router) { }

  ngOnInit(): void {
    this.servantdata.servantdataimporter().snapshotChanges()
    .pipe(map(servantdata=>servantdata.map(ser=>({servantID:ser.payload.val()}))))
    .subscribe(res=>{console.log(res[0].servantID) 
       console.log(res[1].servantID)
    this.result.ID=res[0].servantID
    this.result.password=res[1].servantID
  })
  console.log(this.result)
  }

  onSubmit(form: NgForm){
    const promise = new Promise((resolve , reject)=> {
    console.log(form.value.servantid);
    console.log(form.value.servantpsw);
    this.loggedemail=form.value.servantid
    this.loggedpsw=form.value.servantpsw
    this.onclick()
    if (this.a ) {
      resolve(this.servantdata.servantdataretriever(this.a))
      this.route.navigate(['servantpage'])
    }
})
  }
  onclick(){
    this.clicked=true
    if(this.result.ID!=this.loggedemail ||
      this.result.password!= this.loggedpsw){
        this.a=false
      }else{
        this.a=true
      }
    }
}
