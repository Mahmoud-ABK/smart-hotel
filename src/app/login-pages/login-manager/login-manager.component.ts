import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthGuard } from 'src/app/guards/auth.guard';
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
  a:boolean
  constructor(private managerdata : KitchenService, private managerstatus :AuthGuard, public route : Router) { 

  }

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
    const promise = new Promise((resolve , reject)=> {
    console.log(form.value.managerid);
    console.log(form.value.managerpsw);
    this.loggedemail=form.value.managerid
    this.loggedpsw=form.value.managerpsw
    this.onclick()
    if (this.a ) {
      resolve(this.managerdata.managerdataretriever(this.a))
      this.route.navigate(['/managerinterface/roommanagement'])
    }
    })
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
