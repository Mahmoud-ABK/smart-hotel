import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FoodOrderModel } from 'src/app/Models/food-order-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { KitchenService } from 'src/app/Services/kitchen.service';

@Component({
  selector: 'app-kitchen-page',
  templateUrl: './kitchen-page.component.html',
  styleUrls: ['./kitchen-page.component.css']
})
export class KitchenPageComponent implements OnInit {
  param:boolean
  foodOrders: FoodOrderModel[] = []
  constructor(private dataImporter: DataImporterService, private kitchenguard:KitchenService,  public route : Router) {
    this.dataImporter.foodImporter().snapshotChanges()
    .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

      this.foodOrders = result;
      console.log(this.foodOrders)

    })
   }

  ngOnInit(): void {
  }

  OppaToArray(array:[]):[]{
    return array
  }

  removerFromList(a:object) {
    this.foodOrders.forEach((foodOrder, index) => {
    if(foodOrder === a){
      this.foodOrders.splice(index, 1);
    }
    });
    this.dataImporter.db.object('/').update({
      FoodOrders: this.foodOrders
    })
  }
  logout(){
    localStorage.removeItem('kitAccess')
    this.param=false
    this.kitchenguard.kitchendataretriever(this.param)
    this.route.navigate(['/loginroundabout'])
   }
   translator(param:boolean):string{
    if(param){
      return "yes"
    }else{
      return "no"
    }
   }
}
