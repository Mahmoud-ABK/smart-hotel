import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Kitchen } from 'src/app/Models/kitchen.model';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  result:Kitchen=new Kitchen()
  loggedemail:any
  loggedpsw:any
  clicked:boolean=false
  a:boolean=true
  constructor(private managerdata : KitchenService) { }

  ngOnInit(): void {
    this.managerdata.managerdataimporter().snapshotChanges()
    .pipe(map(managerdata=>managerdata.map(ser=>({managerID:ser.payload.val()}))))
    .subscribe(res=>{console.log(res[0].managerID)
       console.log(res[1].managerID)
    this.result.ID=res[0].managerID
    this.result.password=res[1].managerID
  })
  console.log(this.result)
  }


  onSubmit(form: NgForm){
    console.log(form.value.managerid);
    console.log(form.value.managerpsw);
    this.loggedemail=form.value.managerid
    this.loggedpsw=form.value.managerpsw
  }
  onclick(){
    this.clicked=true
    console.log("yoooo")
    if(this.result.ID!=this.loggedemail ||
      this.result.password!= this.loggedpsw){
        this.a=false
      }else{
        this.a=true
      }
    }
}
