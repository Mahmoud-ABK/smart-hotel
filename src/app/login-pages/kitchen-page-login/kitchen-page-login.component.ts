import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Kitchen } from 'src/app/Models/kitchen.model';
import { KitchenService } from 'src/app/Services/kitchen.service';
@Component({
  selector: 'app-kitchen-page-login',
  templateUrl: './kitchen-page-login.component.html',
  styleUrls: ['./kitchen-page-login.component.css']
})
export class KitchenPageLoginComponent implements OnInit {
 result:Kitchen=new Kitchen()
  constructor(private kitchendata : KitchenService) { }

  ngOnInit(): void {
    this.kitchendata.kitchendataimporter().snapshotChanges()
    .pipe(map(kitchendata=>kitchendata.map(kit=>({kitchenID:kit.payload.val()}))))
    .subscribe(res=>{console.log(res[0].kitchenID) 
       console.log(res[1].kitchenID)
    this.result.kitchenID=res[0].kitchenID
    this.result.password=res[1].kitchenID
  })
  console.log(this.result)
  }

  onSubmit(form: NgForm){
    console.log(form.value.kitchenID);
    console.log(form.value.kitchenpsw);
    console.log("hey")
   
  }

  
}
